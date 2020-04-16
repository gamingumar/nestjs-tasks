/*
 * File: app.module.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Wednesday, 15th April 2020 2:12:50 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 16th April 2020 6:23:03 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
