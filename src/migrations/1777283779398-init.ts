import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1777283779398 implements MigrationInterface {
    name = 'Init1777283779398'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`status\` enum ('active', 'inactive', 'deleted') NOT NULL DEFAULT 'inactive'`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD UNIQUE INDEX \`IDX_e84ed8eafd2812aaf53a33064d\` (\`phone_no\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP INDEX \`IDX_e84ed8eafd2812aaf53a33064d\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`status\``);
    }

}
