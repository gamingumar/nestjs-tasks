/*
 * File: task.entity.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Thursday, 16th April 2020 6:25:18 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Saturday, 18th April 2020 12:26:42 am
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { TaskStatus } from "./task-status.enum";
import { User } from "../auth/user.entity";

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

  @ManyToOne(type => User, user => user.tasks, {eager: false})
  user: User;

  @Column()
  userId: number;
}