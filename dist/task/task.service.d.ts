import { PrismaService } from "../prisma.service";
import { TaskDto } from "./dto/task.dto";
export declare class TaskService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        priority: import(".prisma/client").$Enums.Priority;
        isCompleted: boolean;
        userId: string;
    }[]>;
    create(dto: any, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        priority: import(".prisma/client").$Enums.Priority;
        isCompleted: boolean;
        userId: string;
    }>;
    update(dto: Partial<TaskDto>, taskId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        priority: import(".prisma/client").$Enums.Priority;
        isCompleted: boolean;
        userId: string;
    }>;
    delete(taskId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        priority: import(".prisma/client").$Enums.Priority;
        isCompleted: boolean;
        userId: string;
    }>;
}
