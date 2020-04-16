/*
 * File: task.model.ts
 * Project: nestjs-task-management
 * File Created: Wednesday, 15th April 2020 5:58:24 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 16th April 2020 7:23:41 pm
 * -----
 * Copyright YYYY - 2020 WhileGeek, https://umar.tech
 */

// export interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: TaskStatus;
// }

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export const TaskStatusList = [
  TaskStatus.OPEN,
  TaskStatus.IN_PROGRESS,
  TaskStatus.DONE
]