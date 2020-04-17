/*
 * File: get-user.decorator.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Friday, 17th April 2020 10:25:00 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Friday, 17th April 2020 11:02:20 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "./user.entity";

export const GetUser = createParamDecorator((data, req:ExecutionContext): User => {
  return req.switchToHttp().getRequest().user;
})