import { Injectable } from '@nestjs/common';
import { TaskInterface } from './task.model';
import { TaskDto } from './dto/task.dto';
@Injectable()
export class TasksService {
  private tasks: TaskInterface[] = [];

  public getAllTasks(): TaskInterface[] {
    return this.tasks;
  }

  public createTask(body: TaskDto) {
    const { title, description } = body;
    const task = {
      title,
      description,
    };
    this.tasks.push(task);
    return task;
  }
}
