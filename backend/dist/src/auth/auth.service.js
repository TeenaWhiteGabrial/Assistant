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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async register(username, email, password) {
        const existing = await this.prisma.user.findFirst({
            where: {
                OR: [{ username }, { email }],
            },
        });
        if (existing) {
            throw new Error('用户已存在');
        }
        const user = await this.prisma.user.create({
            data: {
                username,
                email,
                password,
            },
        });
        return {
            id: user.id,
            username: user.username,
            email: user.email,
        };
    }
    async login(username, password) {
        const user = await this.prisma.user.findFirst({
            where: { username, password },
        });
        if (!user) {
            throw new Error('用户名或密码错误');
        }
        return {
            token: 'fake-jwt-token',
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
            },
        };
    }
    async getUserInfo(userId) {
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map