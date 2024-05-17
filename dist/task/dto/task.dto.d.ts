import { Priority } from "@prisma/client";
export declare class TaskDto {
    name: string;
    IsCompleted?: boolean;
    createdAt?: string;
    priority?: Priority;
}
