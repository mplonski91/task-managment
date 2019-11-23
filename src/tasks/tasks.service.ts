import { Injectable } from '@nestjs/common';
import { TaskInterface, TaskStatusEnum } from './task.model';
import { TaskDto } from './dto/create-task.dto';
import * as uuid from 'uuid/v1';

@Injectable()
export class TasksService {
  private tasks: TaskInterface[] = [];

  public getAllTasks(): TaskInterface[] {
    return this.tasks;
  }

  public getTask(id: string): TaskInterface[] {
    return this.tasks.filter(task => task.id === id);
  }

  public createTask(body: TaskDto): TaskInterface {
    const { title, description } = body;
    const task: TaskInterface = {
      id: uuid(),
      title,
      description,
      status: TaskStatusEnum.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  public deleteTask(id: string): TaskInterface[] {
    const test: TaskInterface[] = this.tasks.filter(task => task.id !== id);
    return (this.tasks = test);
  }
}
