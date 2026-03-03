import { PrismaService } from '../prisma/prisma.service';
import { AiService } from '../ai/ai.service';
export declare class EntryService {
    private prisma;
    private aiService;
    constructor(prisma: PrismaService, aiService: AiService);
    create(userId: string, type: string, content: string): Promise<{
        aiReply: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.EntryType;
        title: string | null;
        content: string;
        structuredData: import("@prisma/client/runtime/client").JsonValue | null;
        status: import("@prisma/client").$Enums.EntryStatus;
        userId: string;
    }>;
    getList(userId: string, type?: string, page?: number, pageSize?: number): Promise<{
        list: ({
            reminder: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                entryId: string;
                remindAt: Date;
                isCompleted: boolean;
                notifyMethod: import("@prisma/client/runtime/client").JsonValue | null;
            } | null;
            bill: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                amount: import("@prisma/client-runtime-utils").Decimal;
                category: string;
                merchant: string | null;
                billDate: Date;
                paymentMethod: string | null;
                entryId: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            type: import("@prisma/client").$Enums.EntryType;
            title: string | null;
            content: string;
            structuredData: import("@prisma/client/runtime/client").JsonValue | null;
            status: import("@prisma/client").$Enums.EntryStatus;
            userId: string;
        })[];
        total: number;
        page: number;
        pageSize: number;
    }>;
    getOne(id: string): Promise<({
        reminder: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            entryId: string;
            remindAt: Date;
            isCompleted: boolean;
            notifyMethod: import("@prisma/client/runtime/client").JsonValue | null;
        } | null;
        bill: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            amount: import("@prisma/client-runtime-utils").Decimal;
            category: string;
            merchant: string | null;
            billDate: Date;
            paymentMethod: string | null;
            entryId: string;
        } | null;
        photo: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            entryId: string;
            fileKey: string;
            ocrText: string | null;
            aiDescription: string | null;
            takenAt: Date | null;
            location: string | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.EntryType;
        title: string | null;
        content: string;
        structuredData: import("@prisma/client/runtime/client").JsonValue | null;
        status: import("@prisma/client").$Enums.EntryStatus;
        userId: string;
    }) | null>;
    delete(id: string): Promise<void>;
    private generateAiReply;
}
