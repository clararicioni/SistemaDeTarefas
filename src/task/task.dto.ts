import {
  IsEnum,
  IsOptional,
  IsUUID,
  MaxLength,
  MinLength,
  IsString,
  IsDateString,
} from 'class-validator';

export enum TaskStatusEnum {
  TO_DO = 'TO_DO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export class TaskDTO {
  @IsUUID('4')
  @IsOptional()
  id?: string;

  @IsString()
  @MinLength(3)
  @MaxLength(256)
  title!: string;

  @IsString()
  @MinLength(5)
  @MaxLength(512)
  description!: string;

  @IsEnum(TaskStatusEnum)
  @IsOptional()
  status!: TaskStatusEnum;

  @IsDateString()
  expirationDate!: Date;
}

export interface FindAllParameters {
  title?: string;
  status?: string;
}

export class TaskRouteParameters{
  @IsUUID()
  id!: string;
}
