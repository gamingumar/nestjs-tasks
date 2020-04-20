/*
 * File: development.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Monday, 20th April 2020 8:41:26 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Monday, 20th April 2020 8:50:51 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

export default {
  db: {
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    synchronize: true,
  },
  jwt: {
    secret: "guSecret94"
  }
}
