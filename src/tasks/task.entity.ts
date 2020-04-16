/*
 * File: task.entity.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Thursday, 16th April 2020 6:25:18 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 16th April 2020 7:35:10 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { TaskStatus } from "./task-status.enum";

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  
  @Column()
  description: string;
  
  @Column()
  status: TaskStatus;
}