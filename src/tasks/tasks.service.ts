/*
 * File: tasks.service.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Wednesday, 15th April 2020 5:45:45 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Saturday, 18th April 2020 1:21:49 am
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/creat-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { User } from '../auth/user.entity';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  // private tasks: Task[] = [];

  getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
    return this.taskRepository.getTasks(filterDto, user)
  }

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { search, status } = filterDto

  //   let tasks = this.getAllTasks()

  //   if (status) {
  //     tasks = tasks.filter(task => task.status === status)
  //   }

  //   if (search) {
  //     tasks = tasks.filter(task => task.title.includes(search) || task.description.includes(search))
  //   }

  //   return tasks;
  // }

  async getTaskById(id: number, user: User): Promise<Task> {
    const found = await this.taskRepository.findOne(id, {where: {id, userId: user.id}});

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`)
    }

    return found
  }

  // getTaskById(id: string): Task {
  //   const found = this.tasks.find(task => task.id === id);

  //   if (!found) {
  //     throw new NotFoundException(`Task with ID "${id}" not found`)
  //   }

  //   return found
  // }

  createTask(createTaskData: CreateTaskDto, user: User): Promise<Task> {
    return this.taskRepository.createTask(createTaskData, user)
  }


  // createTask(createTaskData: CreateTaskDto): Task {
  //   const { title, description } = createTaskData;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN
  //   }

  //   this.tasks.push(task)

  //   return task;
  // }

  async updateTaskStatus(id: number, status: TaskStatus, user: User): Promise<Task> {
    const task = await this.getTaskById(id, user);
    task.status = status;
    await task.save()
    return task;
  }

  // updateTaskStatus(id: string, status: TaskStatus) {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }

  async deleteTask(id: number, user: User): Promise<void> {
    const result = await this.taskRepository.delete({id, userId: user.id});

      if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`)
    }
  }

  // deleteTaskById(id: string): void {
  //   this.getTaskById(id);
    
  //   this.tasks = this.tasks.filter(task => task.id !== id);
  // }
}
