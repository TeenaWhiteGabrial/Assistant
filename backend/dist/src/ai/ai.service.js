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
exports.AiService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let AiService = class AiService {
    configService;
    apiKey;
    chatModel;
    constructor(configService) {
        this.configService = configService;
        this.apiKey = this.configService.get('DASHSCOPE_API_KEY') || '';
        this.chatModel = this.configService.get('DASHSCOPE_CHAT_MODEL') || 'qwen-max';
    }
    async analyze(content) {
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
        return {
            type: 'NOTE',
            title: content.slice(0, 20) + '...',
            data: {},
        };
    }
    extractBillInfo(content) {
        const match = content.match(/(\d+(\.\d+)?)\s*(块 | 元)/);
        const amount = match ? parseFloat(match[1]) : 0;
        let category = '其他';
        if (content.includes('打车') || content.includes('车'))
            category = '交通';
        else if (content.includes('饭') || content.includes('吃'))
            category = '餐饮';
        else if (content.includes('买') || content.includes('购物'))
            category = '购物';
        return { amount, category };
    }
    extractMemoInfo(content) {
        const timeMatch = content.match(/(\d+ 点 |\d+:\d+)/);
        return {
            time: timeMatch ? timeMatch[0] : null,
        };
    }
    async chat(message, context = []) {
        return {
            reply: 'AI 回复：我收到你的消息了 - ' + message,
        };
    }
};
exports.AiService = AiService;
exports.AiService = AiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AiService);
//# sourceMappingURL=ai.service.js.map