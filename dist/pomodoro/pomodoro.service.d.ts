import { PrismaService } from "../prisma.service";
export declare class PomodoroService {
    private prisma;
    constructor(prisma: PrismaService);
    getTodaySession(userId: string): Promise<{
        rounds: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            totalSeconds: number;
            isCompleted: boolean;
            pomodoroSessionId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean;
        userId: string;
    }>;
    create(userId: string): Promise<{
        rounds: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            totalSeconds: number;
            isCompleted: boolean;
            pomodoroSessionId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean;
        userId: string;
    }>;
    update(dto: any, pomodoroId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean;
        userId: string;
    }>;
    updateRound(dto: any, roundId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        totalSeconds: number;
        isCompleted: boolean;
        pomodoroSessionId: string;
    }>;
    deleteSession(sessionId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean;
        userId: string;
    }>;
}
