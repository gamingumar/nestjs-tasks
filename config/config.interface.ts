/*
 * File: config.interface.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Monday, 20th April 2020 8:59:34 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Monday, 20th April 2020 9:10:10 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

export interface IConfig {
  server: IConfigServer,
  db: IConfigDB,
  jwt: IConfigJWT
}

export interface IConfigJWT {
  expiresIn: number;
  secret: string;
}

export interface IConfigServer {
  port: number;
}

export interface IConfigDB {
  type: "aurora-data-api";
  host: string;
  port: number;
  username: string;
  password: string;
  synchronize: boolean;
  database: string;
}