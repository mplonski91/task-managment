import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskInterface, TaskStatusEnum } from './task.model';
import { TaskDto } from './dto/create-task.dto';
import * as uuid from 'uuid/v1';
import { FilterSearchDto } from './dto/filter-search.dto';

@Injectable()
export class TasksService {
  private tasks: TaskInterface[] = [];

  public getAllTasks(): TaskInterface[] {
    return this.tasks;
  }

  public getTasks(filterSearchDto: FilterSearchDto): TaskInterface[] {
    const { status, search } = filterSearchDto;
    let tasks: TaskInterface[] = this.getAllTasks();

    if (status) {
      tasks = tasks.filter(task => task.status === status);
    }

    if (search) {
      tasks = tasks.filter(
        task =>
          task.title.includes(search) || task.description.includes(search),
      );
    }
    console.log(search);
    console.log(status);

    return tasks;
  }

  public getTask(id: string): TaskInterface {
    const task: TaskInterface = this.tasks.find(task => task.id === id);

    if (!task) {
      throw new NotFoundException(`Task with this ID: ${id} not found`);
    }

    return task;
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
    const findTask: TaskInterface = this.getTask(id);

    if (!findTask) {
      throw new NotFoundException(`Task with this ID: ${id} not found`);
    }

    this.tasks = this.tasks.filter(task => task.id !== findTask.id);
  }

  public changeTaskStatus(id: string, status: TaskStatusEnum): TaskInterface {
    const task: TaskInterface = this.getTask(id);
    task.status = status;
    return task;
  }
}
