import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) { }
    @Get('/all')
        getAllTasks(): String[] {
            return this.taskService.getAllTasks();
    }
    @Post('/task')
        createTask(): String {
            return 'created task';
    }

    @Put('/task')
        updateTask(): String {
            return 'updated task';
    }

    @Patch('/task')
        partialUpdateTask(): String {
            return 'partial update task';
    }

    @Delete('/task')
        deleteTask(): String {
            return 'deleted task';
    }


}