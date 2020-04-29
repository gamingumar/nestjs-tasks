/*
 * File: roles.decorator.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Thursday, 30th April 2020 12:30:34 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 30th April 2020 12:53:22 am
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { SetMetadata } from "@nestjs/common";

export const CanAccess = (...roles:string[]) => SetMetadata('role', roles)