import {IsNumber, IsOptional, IsString} from "class-validator";


export class TimeBlockDto {
    @IsString()
    name:string

    @IsOptional()
    @IsString()
    color?:string


    @IsNumber()
    duration:string

    @IsOptional()
    @IsNumber()
    order?:number

}


