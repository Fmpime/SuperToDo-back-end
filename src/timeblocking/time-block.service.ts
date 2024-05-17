import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";
import {TimeBlockDto} from "./dto/timeBlock.dto";


@Injectable()
export class TimeBlockService {
  constructor(private prisma: PrismaService) {
  }
  async getAll(userId:string){
    return this.prisma.timeBlock.findMany({
      where:{
        userId
      },
      orderBy:{
        order: 'asc'
      }
    })
  }
  async create(dto: any,userId:string){
    return this.prisma.timeBlock.create({
      data:{
        ...dto,
        user:{
          connect:{
            id:userId,
          },
        }
      }

    })
  }
  async update(dto: any,timeBlockId:string,userId:string){

    return this.prisma.timeBlock.update({
      where:{
        userId,
        id:timeBlockId
      } ,
      data: dto,
    })
  }
  async updateOrder(ids:string[]){
    return this.prisma.$transaction(
        ids.map((id, order) =>
          this.prisma.timeBlock.update({
            where: {id},
            data: {order}
          })
        ))
  }

  async delete(timeBlockId:string,userId:string){
    return this.prisma.timeBlock.delete({
      where:{
        id:timeBlockId,
        userId
      }
    })
  }

}
