import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {TaskDto} from "./dto/create-task.dto"

@Injectable()
export class TaskService {
    constructor(@InjectModel('Task') private taskModel: Model<TaskDto>) {}
    async getAll():Promise<TaskDto[]>{
        return this.taskModel.find()
    }
    //ou
    // async getAll(){
    //     return await this.taskModel.find()
    // }
    async getById(id:string):Promise<TaskDto>{
        return this.taskModel.findById(id);
    }
    async create(task:TaskDto):Promise<TaskDto>{
        console.log(task);
        return this.taskModel.create(task);
    }
    async update(id:string, task:TaskDto):Promise<TaskDto>{
        await this.taskModel.findByIdAndUpdate(id,task)
        return this.taskModel.findById(id)
    }
    async delete(id:string){
        await this.taskModel.findByIdAndDelete(id)
    }
}
