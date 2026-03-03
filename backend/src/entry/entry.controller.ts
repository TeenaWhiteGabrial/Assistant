import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  Query,
  Headers,
} from '@nestjs/common';
import { EntryService } from './entry.service';

@Controller('entries')
export class EntryController {
  constructor(private entryService: EntryService) {}

  // 创建记录
  @Post()
  async create(
    @Body() body: { type: string; content: string },
    @Headers('authorization') _auth?: string,
  ) {
    const userId = 'user-id'; // TODO: 从 JWT 解析
    const result = await this.entryService.create(userId, body.type, body.content);
    return { code: 200, data: result, message: '创建成功' };
  }

  // 获取列表
  @Get()
  async getList(
    @Query('type') type?: string,
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 20,
    @Headers('authorization') _auth?: string,
  ) {
    const userId = 'user-id';
    const result = await this.entryService.getList(
      userId,
      type,
      Number(page),
      Number(pageSize),
    );
    return { code: 200, data: result, message: 'success' };
  }

  // 获取单条
  @Get(':id')
  async getOne(@Param('id') id: string) {
    const result = await this.entryService.getOne(id);
    return { code: 200, data: result, message: 'success' };
  }

  // 删除
  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.entryService.delete(id);
    return { code: 200, data: null, message: '删除成功' };
  }
}
