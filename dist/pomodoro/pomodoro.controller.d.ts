import { PomodoroService } from './pomodoro.service';
import { PomodoroDto } from "./dto/pomodoro.dto";
export declare class PomodoroController {
    private readonly PomodoroService;
    constructor(PomodoroService: PomodoroService);
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
    updateRound(dto: PomodoroDto, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        totalSeconds: number;
        isCompleted: boolean;
        pomodoroSessionId: string;
    }>;
    update(dto: PomodoroDto, id: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean;
        userId: string;
    }>;
    delete(id: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean;
        userId: string;
    }>;
}
