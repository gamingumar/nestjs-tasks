/*
 * File: 1588164773481-UserRoleRefactor.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Wednesday, 29th April 2020 5:52:53 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Wednesday, 29th April 2020 8:49:46 pm
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class UserRoleRefactor1588164773481 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        // await queryRunner.addColumn('user', new TableColumn({name: 'role', type: "character"}))
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN role varchar(255) NULL`)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN role`)
    }

}
