import { Controller, Post, Body, Get, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body() body: { username: string; email: string; password: string },
  ) {
    const result = await this.authService.register(
      body.username,
      body.email,
      body.password,
    );
    return { code: 200, data: result, message: '注册成功' };
  }

  @Post('login')
  async login(
    @Body() body: { username: string; password: string },
  ) {
    const result = await this.authService.login(body.username, body.password);
    return { code: 200, data: result, message: '登录成功' };
  }

  @Get('profile')
  async getProfile(@Headers('authorization') auth: string) {
    // TODO: 解析 JWT 获取 userId
    const userId = 'user-id'; // 临时写死
    const result = await this.authService.getUserInfo(userId);
    return { code: 200, data: result, message: 'success' };
  }
}
