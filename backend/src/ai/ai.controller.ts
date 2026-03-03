import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private aiService: AiService) {}

  @Post('chat')
  async chat(@Body() body: { message: string }) {
    const result = await this.aiService.chat(body.message);
    return { code: 200, data: result, message: 'success' };
  }
}
