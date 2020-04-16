/*
 * File: get-tasks-filter.dto.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Wednesday, 15th April 2020 11:19:57 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 16th April 2020 7:23:41 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { TaskStatus, TaskStatusList } from "../task-status.enum";
import { IsOptional, IsIn, IsNotEmpty } from "class-validator";

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn(TaskStatusList)
  status: TaskStatus;
   
  @IsOptional()
  @IsNotEmpty()
  search: string;
}