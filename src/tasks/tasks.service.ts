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

  public getTask(id: string): TaskInterface {
    return this.tasks.find(task => task.id === id);
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

  public deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  public changeTaskStatus(id: string, status: TaskStatusEnum): TaskInterface {
    const task: TaskInterface = this.getTask(id);
    task.status = status;
    return task;
  }
}
