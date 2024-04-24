import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    getAllTasks(): String[]{
        return ['task1', 'task2', 'task3'];
    }
}
