import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AiService } from '../ai/ai.service';

@Injectable()
export class EntryService {
  constructor(
    private prisma: PrismaService,
    private aiService: AiService,
  ) {}

  // 创建记录
  async create(userId: string, type: string, content: string) {
    // 如果类型是 auto，让 AI 自动识别
    let entryType = type;
    let structuredData: any = null;
    let title: string | null = null;

    if (type === 'auto') {
      const aiResult = await this.aiService.analyze(content);
      entryType = aiResult.type.toLowerCase();
      structuredData = aiResult.data;
      title = aiResult.title;
    }

    // 创建记录
    const entry = await this.prisma.entry.create({
      data: {
        userId,
        type: entryType.toUpperCase() as any,
        title,
        content,
        structuredData: structuredData || null,
        status: 'PROCESSED',
      },
    });

    // 根据类型创建子记录
    if (entryType === 'bill' && structuredData) {
      await this.prisma.bill.create({
        data: {
          entryId: entry.id,
          amount: (structuredData as any).amount || 0,
          category: (structuredData as any).category || '其他',
          merchant: (structuredData as any).merchant,
          billDate: new Date(),
        },
      });
    }

    return {
      ...entry,
      aiReply: this.generateAiReply(entryType, structuredData),
    };
  }

  // 获取列表
  async getList(userId: string, type?: string, page = 1, pageSize = 20) {
    const skip = (page - 1) * pageSize;

    const where: any = { userId };
    if (type) {
      where.type = type.toUpperCase();
    }

    const [entries, total] = await Promise.all([
      this.prisma.entry.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { createdAt: 'desc' },
        include: {
          bill: true,
          reminder: true,
        },
      }),
      this.prisma.entry.count({ where }),
    ]);

    return {
      list: entries,
      total,
      page,
      pageSize,
    };
  }

  // 获取单条
  async getOne(id: string) {
    return this.prisma.entry.findUnique({
      where: { id },
      include: {
        bill: true,
        reminder: true,
        photo: true,
      },
    });
  }

  // 删除
  async delete(id: string) {
    await this.prisma.entry.delete({
      where: { id },
    });
  }

  // 生成 AI 回复
  private generateAiReply(type: string, data: any): string {
    switch (type) {
      case 'bill':
        return `已记录：${data.category}支出 ${data.amount}元`;
      case 'memo':
        return `备忘录已创建${data.time ? `，${data.time} 提醒你` : ''}`;
      default:
        return '记录成功';
    }
  }
}
