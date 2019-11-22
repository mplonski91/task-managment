import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskInterface } from './task.model';
import { TaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks(): TaskInterface[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() body: TaskDto) {
    return this.tasksService.createTask(body);
  }
}
