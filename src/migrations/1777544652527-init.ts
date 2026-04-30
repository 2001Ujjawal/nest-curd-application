import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1777544652527 implements MigrationInterface {
    name = 'Init1777544652527'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`uuid\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD UNIQUE INDEX \`IDX_951b8f1dfc94ac1d0301a14b7e\` (\`uuid\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP INDEX \`IDX_951b8f1dfc94ac1d0301a14b7e\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`uuid\``);
    }

}
