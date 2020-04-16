/*
 * File: user.entity.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Friday, 17th April 2020 12:33:46 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Friday, 17th April 2020 1:26:23 am
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
}