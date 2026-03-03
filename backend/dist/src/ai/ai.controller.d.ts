import { AiService } from './ai.service';
export declare class AiController {
    private aiService;
    constructor(aiService: AiService);
    chat(body: {
        message: string;
    }): Promise<{
        code: number;
        data: {
            reply: string;
        };
        message: string;
    }>;
}
