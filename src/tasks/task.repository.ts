/*
 * File: task.repository.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Thursday, 16th April 2020 6:34:53 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Friday, 17th April 2020 12:02:44 am
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { Repository, EntityRepository } from "typeorm";
import { Task } from "./task.entity"; 
import { CreateTaskDto } from "./dto/creat-task.dto";
import { TaskStatus } from "./task-status.enum";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task>{

  async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    const {search, status} = filterDto

    const query = this.createQueryBuilder('task')


    if (status) {
      query.andWhere('task.status = :status', {status})
    }

    if (search) {
      query.andWhere('(task.title LIKE :search OR task.description LIKE :search)', {search: `%${search}%`})
    }


    const tasks = await query.getMany()

    return tasks;

  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    
    const task = new Task();
    task.title = title;
    task.description = description;
    task.status = TaskStatus.OPEN;
    await task.save()

    return task;
  }
}