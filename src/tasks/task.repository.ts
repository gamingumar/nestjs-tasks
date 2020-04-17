/*
 * File: task.repository.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Thursday, 16th April 2020 6:34:53 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Saturday, 18th April 2020 12:29:39 am
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { Repository, EntityRepository } from "typeorm";
import { Task } from "./task.entity"; 
import { CreateTaskDto } from "./dto/creat-task.dto";
import { TaskStatus } from "./task-status.enum";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { User } from "../auth/user.entity";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task>{

  async getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
    const {search, status} = filterDto

    const query = this.createQueryBuilder('task')

    query.where('task.userId = :userId', {userId: user.id})


    if (status) {
      query.andWhere('task.status = :status', {status})
    }

    if (search) {
      query.andWhere('(task.title LIKE :search OR task.description LIKE :search)', {search: `%${search}%`})
    }


    const tasks = await query.getMany()

    return tasks;

  }

  async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    const { title, description } = createTaskDto;
    
    const task = new Task();
    task.title = title;
    task.description = description;
    task.status = TaskStatus.OPEN;
    task.user = user;
    await task.save()

    delete task.user;

    return task;
  }
}