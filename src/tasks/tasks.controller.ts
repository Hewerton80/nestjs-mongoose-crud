import { Controller,Get,Post,Put,Delete,Param,Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService:TaskService){}
    @Get("/")
    async getAll():Promise<TaskDto[]>{
        return this.taskService.getAll()
    }
    @Get("/:id")
    async getById(@Param("id") id:string):Promise<TaskDto>{
        return this.taskService.getById(id)
    }
    @Post("/")
    async create(@Body() task:TaskDto):Promise<TaskDto>{
        return this.taskService.create(task);
    }
    @Put("/:id")
    async update(@Param("id") id:string,@Body() task:TaskDto):Promise<TaskDto>{
        console.log(id,task)
        return this.taskService.update(id,task);
    }
    @Delete("/:id")
    async delete(@Param("id") id:string){
        this.taskService.delete(id)
    }
}
