/*
 * File: task-status-validation.pipe.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Thursday, 16th April 2020 12:38:08 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 16th April 2020 7:23:41 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { PipeTransform, BadRequestException } from "@nestjs/common";
import { TaskStatusList } from "../task-status.enum";

export class TaskStatusValidationPipe implements PipeTransform {

  readonly allowedStatuses = TaskStatusList;


  transform(value: string) {
    if (!this.isStatusValid(value)) {
      value = value.toUpperCase()
      throw new BadRequestException(`"${value}" is an invalid status`)
    }
    
    return value;
  }

  private isStatusValid(status: any) {
    return this.allowedStatuses.indexOf(status) !== -1;
  }
}