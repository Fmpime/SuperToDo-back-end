export declare class PomodoroSettingsDto {
    workInterval?: number;
    breakInterval?: number;
    intervalsCount?: number;
}
export declare class UserDto extends PomodoroSettingsDto {
    email: string;
    password: string;
}
