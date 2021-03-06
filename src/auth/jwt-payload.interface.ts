/*
 * File: jwt-payload.interface.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Friday, 17th April 2020 7:42:17 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 30th April 2020 1:02:26 am
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

export interface JwtPayload {
  username: string;
  role: string;
}