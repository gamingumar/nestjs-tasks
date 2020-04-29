/*
 * File: roles.guard.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Wednesday, 29th April 2020 5:27:11 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Wednesday, 29th April 2020 11:53:58 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */


import { Injectable, CanActivate, ExecutionContext, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from './user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  private logger = new Logger('RolesGuard')

  getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  canActivate(context: ExecutionContext): boolean {
    // console.log(JSON.stringify(context.switchToHttp().getRequest()))
    const request = context.switchToHttp().getRequest();
    const user:User = request.user;
    
    const roles = this.reflector.get<string[]>('role', context.getHandler());
    this.logger.debug(`checking guard ...: ${JSON.stringify(user, this.getCircularReplacer())}`)
    if (!roles) {
      return true;
    }
    return roles[0] === user?.role;
  }
}