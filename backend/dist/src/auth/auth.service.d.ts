import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    register(username: string, email: string, password: string): Promise<{
        id: string;
        username: string;
        email: string;
    }>;
    login(username: string, password: string): Promise<{
        token: string;
        user: {
            id: string;
            username: string;
            email: string;
        };
    }>;
    getUserInfo(userId: string): Promise<{
        id: string;
        username: string;
        email: string;
        settings: import("@prisma/client/runtime/client").JsonValue;
    } | null>;
}
