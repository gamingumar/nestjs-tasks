/*
 * File: user.repository.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Friday, 17th April 2020 12:37:00 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Wednesday, 29th April 2020 9:31:08 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { Repository, EntityRepository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { ConflictException, InternalServerErrorException, Logger } from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  private logger = new Logger('UserRepository')
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { password, username } = authCredentialsDto;

    this.logger.debug(`${JSON.stringify(authCredentialsDto)}`)

    const user = new User();

    user.username = username;
    user.role = "admin"; // ! must change
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    try {
      await user.save()
    } catch (e) {
      if (e.code === '23505') { // ? this is the code generated by postgres on unique fail
        throw new ConflictException('Username already exists...');
      } else {
        this.logger.error(JSON.stringify(e))
        throw new InternalServerErrorException()
      }
    }
  }

  async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<User|null> {
    const {password, username} = authCredentialsDto;

    const user = await this.findOne({username})

    if (user && await user.validatePassword(password)) {
      delete user.password
      delete user.salt
      return user;
      // return user.username;
    }
    return null;
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt)
  }
}