import {IsBoolean, IsNumber, IsOptional} from "class-validator";

export class PomodoroDto {
    @IsOptional()
    @IsBoolean()
    IsCompleted?:boolean

}

export class  PomodoroRoundDto{
    @IsNumber()
    totalSeconds: number

    @IsOptional()
    @IsBoolean()
    IsCompleted?:boolean


}
