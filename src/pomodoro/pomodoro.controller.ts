import {
  Controller,
  Get,
  Body, UsePipes, HttpCode, Post, Param, ValidationPipe, Put, Delete,
} from '@nestjs/common';
import { PomodoroService } from './pomodoro.service';
import {Auth} from "../auth/decorators/auth.decorator";
import {CurrentUser} from "../auth/decorators/user.decorator";
import {PomodoroDto} from "./dto/pomodoro.dto";


@Controller('user/pomodoro')
export class PomodoroController {
  constructor(private readonly PomodoroService: PomodoroService) {}
  @Get('today')
  @Auth()
  async getTodaySession(@CurrentUser('id') userId:string){
    return this.PomodoroService.getTodaySession(userId)
  }

  @HttpCode(200)
  @Post()
  @Auth()
  async create(@CurrentUser('id') userId:string){
    return this.PomodoroService.create(userId)
  }
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('/round/:id')
  @Auth()
  async updateRound(
      @Body() dto:PomodoroDto,
      @Param('id') id:string
  ){
    return this.PomodoroService.updateRound(dto,id)
  }
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(
      @Body() dto:PomodoroDto,
      @Param('id') id:string,
      @CurrentUser('id')userId:string
  ){
    return this.PomodoroService.update(dto,id,userId)
  }
  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id' )id: string,@CurrentUser('id')userId:string){
    return this.PomodoroService.deleteSession(id,userId)
  }

}
