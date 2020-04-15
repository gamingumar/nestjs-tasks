/*
 * File: tasks.service.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Wednesday, 15th April 2020 5:45:45 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 16th April 2020 12:37:11 am
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuid from 'uuid/v1'
import { CreateTaskDto } from './dto/creat-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    const { search, status } = filterDto

    let tasks = this.getAllTasks()

    if (status) {
      tasks = tasks.filter(task => task.status === status)
    }

    if (search) {
      tasks = tasks.filter(task => task.title.includes(search) || task.description.includes(search))
    }

    return tasks;
  }

  getTaskById(id: string): Task {
    const found = this.tasks.find(task => task.id === id);

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`)
    }

    return found
  }

  createTask(createTaskData: CreateTaskDto): Task {
    const { title, description } = createTaskData;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN
    }

    this.tasks.push(task)

    return task;
  }

  updateTaskStatus(id: string, status: TaskStatus) {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

  deleteTaskById(id: string): void {
    this.getTaskById(id);
    
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
