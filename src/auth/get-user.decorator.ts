/*
 * File: get-user.decorator.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Friday, 17th April 2020 10:25:00 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 23rd April 2020 11:33:17 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "./user.entity";

export const GetUser = createParamDecorator((data, req:ExecutionContext): User => {
  // ? extracting user from request object
  return req.switchToHttp().getRequest().user;
})