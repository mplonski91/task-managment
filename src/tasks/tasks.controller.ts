import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskInterface } from './task.model';
import { TaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks(): TaskInterface[] {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): TaskInterface[] {
    return this.tasksService.getTask(id);
  }

  @Post()
  createTask(@Body() body: TaskDto): TaskInterface {
    return this.tasksService.createTask(body);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): TaskInterface[] {
    return this.tasksService.deleteTask(id);
  }
}
