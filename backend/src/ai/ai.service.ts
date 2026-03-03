import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AiService {
  private apiKey: string;
  private chatModel: string;

  constructor(private configService: ConfigService) {
    this.apiKey = this.configService.get<string>('DASHSCOPE_API_KEY') || '';
    this.chatModel = this.configService.get<string>('DASHSCOPE_CHAT_MODEL') || 'qwen-max';
  }

  // 分析用户输入，识别意图
  async analyze(content: string) {
    // TODO: 调用阿里百炼 API
    // 这里是临时实现，后续会替换成真实 API 调用

    // 简单的关键词匹配逻辑（临时用）
    const lowerContent = content.toLowerCase();

    if (lowerContent.includes('花') || lowerContent.includes('块') || lowerContent.includes('元')) {
      return {
        type: 'BILL',
        title: '支出记录',
        data: this.extractBillInfo(content),
      };
    }

    if (lowerContent.includes('提醒') || lowerContent.includes('记得') || lowerContent.includes('别忘了')) {
      return {
        type: 'MEMO',
        title: '提醒事项',
        data: this.extractMemoInfo(content),
      };
    }

    // 默认是笔记
    return {
      type: 'NOTE',
      title: content.slice(0, 20) + '...',
      data: {},
    };
  }

  // 提取记账信息（简化版）
  private extractBillInfo(content: string) {
    const match = content.match(/(\d+(\.\d+)?)\s*(块 | 元)/);
    const amount = match ? parseFloat(match[1]) : 0;

    let category = '其他';
    if (content.includes('打车') || content.includes('车')) category = '交通';
    else if (content.includes('饭') || content.includes('吃')) category = '餐饮';
    else if (content.includes('买') || content.includes('购物')) category = '购物';

    return { amount, category };
  }

  // 提取备忘录信息（简化版）
  private extractMemoInfo(content: string) {
    const timeMatch = content.match(/(\d+ 点 |\d+:\d+)/);
    return {
      time: timeMatch ? timeMatch[0] : null,
    };
  }

  // 调用阿里百炼聊天 API（后续实现）
  async chat(message: string, context: any[] = []) {
    // TODO: 实现真实的 API 调用
    return {
      reply: 'AI 回复：我收到你的消息了 - ' + message,
    };
  }
}
