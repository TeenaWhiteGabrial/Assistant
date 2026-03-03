import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  // 简单注册（首次使用）
  async register(username: string, email: string, password: string) {
    // 检查用户是否已存在
    const existing = await this.prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    if (existing) {
      throw new Error('用户已存在');
    }

    // 创建用户（简单起见，密码不加密，生产环境要用 bcrypt）
    const user = await this.prisma.user.create({
      data: {
        username,
        email,
        password, // TODO: 使用 bcrypt 加密
      },
    });

    return {
      id: user.id,
      username: user.username,
      email: user.email,
    };
  }

  // 简单登录
  async login(username: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: { username, password },
    });

    if (!user) {
      throw new Error('用户名或密码错误');
    }

    // TODO: 生成 JWT token
    return {
      token: 'fake-jwt-token', // TODO: 实现 JWT
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    };
  }

  // 获取用户信息
  async getUserInfo(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
        settings: true,
      },
    });

    return user;
  }
}
