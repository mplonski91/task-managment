import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatusEnum } from '../task.model';

export class TaskSatusValidationClass implements PipeTransform {
  readonly allowedStatus = [
    TaskStatusEnum.OPEN,
    TaskStatusEnum.IN_PROGRESS,
    TaskStatusEnum.COMPLETED,
  ];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is invalid status`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatus.indexOf(status);
    return idx !== -1;
  }
}
