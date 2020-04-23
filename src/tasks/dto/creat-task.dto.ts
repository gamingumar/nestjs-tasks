/*
 * File: creat-task.dto.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Wednesday, 15th April 2020 7:35:53 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Friday, 24th April 2020 1:05:23 am
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import {IsNotEmpty} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';
export class CreateTaskDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;
}