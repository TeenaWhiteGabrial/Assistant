import { ConfigService } from '@nestjs/config';
export declare class AiService {
    private configService;
    private apiKey;
    private chatModel;
    constructor(configService: ConfigService);
    analyze(content: string): Promise<{
        type: string;
        title: string;
        data: {
            amount: number;
            category: string;
        };
    } | {
        type: string;
        title: string;
        data: {
            time: string | null;
        };
    } | {
        type: string;
        title: string;
        data: {};
    }>;
    private extractBillInfo;
    private extractMemoInfo;
    chat(message: string, context?: any[]): Promise<{
        reply: string;
    }>;
}
