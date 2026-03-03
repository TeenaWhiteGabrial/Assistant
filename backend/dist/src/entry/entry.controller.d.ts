import { EntryService } from './entry.service';
export declare class EntryController {
    private entryService;
    constructor(entryService: EntryService);
    create(body: {
        type: string;
        content: string;
    }, _auth?: string): Promise<{
        code: number;
        data: {
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
        };
        message: string;
    }>;
    getList(type?: string, page?: number, pageSize?: number, _auth?: string): Promise<{
        code: number;
        data: {
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
        };
        message: string;
    }>;
    getOne(id: string): Promise<{
        code: number;
        data: ({
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
        }) | null;
        message: string;
    }>;
    delete(id: string): Promise<{
        code: number;
        data: null;
        message: string;
    }>;
}
