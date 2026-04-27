import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1777283503030 implements MigrationInterface {
    name = 'Init1777283503030'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`phone_no\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`phone_no\``);
    }

}
