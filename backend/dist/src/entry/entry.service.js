"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const ai_service_1 = require("../ai/ai.service");
let EntryService = class EntryService {
    prisma;
    aiService;
    constructor(prisma, aiService) {
        this.prisma = prisma;
        this.aiService = aiService;
    }
    async create(userId, type, content) {
        let entryType = type;
        let structuredData = null;
        let title = null;
        if (type === 'auto') {
            const aiResult = await this.aiService.analyze(content);
            entryType = aiResult.type.toLowerCase();
            structuredData = aiResult.data;
            title = aiResult.title;
        }
        const entry = await this.prisma.entry.create({
            data: {
                userId,
                type: entryType.toUpperCase(),
                title,
                content,
                structuredData: structuredData || null,
                status: 'PROCESSED',
            },
        });
        if (entryType === 'bill' && structuredData) {
            await this.prisma.bill.create({
                data: {
                    entryId: entry.id,
                    amount: structuredData.amount || 0,
                    category: structuredData.category || '其他',
                    merchant: structuredData.merchant,
                    billDate: new Date(),
                },
            });
        }
        return {
            ...entry,
            aiReply: this.generateAiReply(entryType, structuredData),
        };
    }
    async getList(userId, type, page = 1, pageSize = 20) {
        const skip = (page - 1) * pageSize;
        const where = { userId };
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
    async getOne(id) {
        return this.prisma.entry.findUnique({
            where: { id },
            include: {
                bill: true,
                reminder: true,
                photo: true,
            },
        });
    }
    async delete(id) {
        await this.prisma.entry.delete({
            where: { id },
        });
    }
    generateAiReply(type, data) {
        switch (type) {
            case 'bill':
                return `已记录：${data.category}支出 ${data.amount}元`;
            case 'memo':
                return `备忘录已创建${data.time ? `，${data.time} 提醒你` : ''}`;
            default:
                return '记录成功';
        }
    }
};
exports.EntryService = EntryService;
exports.EntryService = EntryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        ai_service_1.AiService])
], EntryService);
//# sourceMappingURL=entry.service.js.map