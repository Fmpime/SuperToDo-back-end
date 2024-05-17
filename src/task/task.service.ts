import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {TaskDto} from "./dto/task.dto";

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {
  }
  async getAll(userId:string){
    return this.prisma.task.findMany({
      where:{
        userId
      }

    })
  }
  async create(dto:any,userId:string){
    if (!dto.createdAt) {
      return this.prisma.task.create({
        data: {
          createdAt: undefined,
          user: {
            connect: {
              id: userId
            },
          },
          ...dto,
        }

      })
    }else {
      return this.prisma.task.create({
        data:{
          ...dto,
          user: {
            connect: {
              id: userId
            }
          }
        }

      })
    }
  }
  async update(dto:Partial<TaskDto>,taskId:string,userId:string){

    if (!dto.createdAt) {
    return this.prisma.task.update({
      where:{
        userId,
        id:taskId
      } ,
      data: {...dto,createdAt:undefined},
    })
    }else {
      return this.prisma.task.update({
        where:{
          userId,
          id:taskId
        } ,
        data: dto,
      })
    }
  }
  async delete(taskId:string){
    return this.prisma.task.delete({
      where:{
        id:taskId
      }
    })
  }

}
