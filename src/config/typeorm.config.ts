/*
 * File: typeorm.config.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Thursday, 16th April 2020 6:07:35 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 16th April 2020 8:02:18 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import {TypeOrmModuleOptions} from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'taskmanagement',
  entities: [__dirname + "/../**/*.entity.{js,ts}"], //? use all entities from previous folder
  synchronize: true, // ! disable in production
}