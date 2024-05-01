import { Body, Param, Controller, Delete, Get, Patch, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) { }
    @ApiOperation({summary: 'Get tasks'})
    @ApiResponse({status: 200, description: 'OK'})
    @ApiResponse({status: 403, description: 'Forbidden'})
    @Get()
        getAllTasks() {
            return this.taskService.getAllTasks();
    }

    @Get('/:id')
        getTaskById(@Param('id') id: string) {
            return this.taskService.getTaskById(parseInt(id));
    }
    @Post()
    @UsePipes(new ValidationPipe())
        createTask(@Body() body: CreateTaskDto) {
            return this.taskService.createTask(body);
    }

    @Put('')
        updateTask(@Body() body: UpdateTaskDto) {
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