import { IsOptional, IsIn, IsString, IsNotEmpty } from 'class-validator';
import { TaskStatusEnum } from '../task.model';

export class FilterSearchDto {
  @IsOptional()
  @IsIn([
    TaskStatusEnum.COMPLETED,
    TaskStatusEnum.IN_PROGRESS,
    TaskStatusEnum.OPEN,
  ])
  status: TaskStatusEnum;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  search: string;
}
