import { PrismaService } from "../prisma.service";
export declare class TimeBlockService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        color: string;
        duration: number;
        order: number;
        userId: string;
    }[]>;
    create(dto: any, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        color: string;
        duration: number;
        order: number;
        userId: string;
    }>;
    update(dto: any, timeBlockId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        color: string;
        duration: number;
        order: number;
        userId: string;
    }>;
    updateOrder(ids: string[]): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        color: string;
        duration: number;
        order: number;
        userId: string;
    }[]>;
    delete(timeBlockId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        color: string;
        duration: number;
        order: number;
        userId: string;
    }>;
}
