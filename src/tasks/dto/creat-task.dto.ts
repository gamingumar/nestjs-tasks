/*
 * File: creat-task.dto.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Wednesday, 15th April 2020 7:35:53 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 16th April 2020 12:22:52 am
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import {IsNotEmpty} from 'class-validator'
export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}