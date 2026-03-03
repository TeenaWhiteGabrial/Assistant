import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: {
        username: string;
        email: string;
        password: string;
    }): Promise<{
        code: number;
        data: {
            id: string;
            username: string;
            email: string;
        };
        message: string;
    }>;
    login(body: {
        username: string;
        password: string;
    }): Promise<{
        code: number;
        data: {
            token: string;
            user: {
                id: string;
                username: string;
                email: string;
            };
        };
        message: string;
    }>;
    getProfile(auth: string): Promise<{
        code: number;
        data: {
            id: string;
            username: string;
            email: string;
            settings: import("@prisma/client/runtime/client").JsonValue;
        } | null;
        message: string;
    }>;
}
