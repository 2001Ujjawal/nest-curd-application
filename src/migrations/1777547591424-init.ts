import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1777547591424 implements MigrationInterface {
    name = 'Init1777547591424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_951b8f1dfc94ac1d0301a14b7e\` ON \`users\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`uuid\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`uuid\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_951b8f1dfc94ac1d0301a14b7e\` ON \`users\` (\`uuid\`)`);
    }

}
