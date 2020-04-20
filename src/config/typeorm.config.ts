/*
 * File: typeorm.config.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Thursday, 16th April 2020 6:07:35 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Monday, 20th April 2020 9:07:52 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import {TypeOrmModuleOptions} from '@nestjs/typeorm'

import * as config from 'config';
import { IConfigDB } from '../../config/config.interface';
const dbConfig:IConfigDB = config.get('db')

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  entities: [__dirname + "/../**/*.entity.{js,ts}"], //? use all entities from previous folder
  synchronize: dbConfig.synchronize, // ! disable in production
}