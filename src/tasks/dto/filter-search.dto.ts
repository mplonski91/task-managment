import { TaskStatusEnum } from '../task.model';

export class FilterSearchDto {
  status: TaskStatusEnum;
  search: string;
}
