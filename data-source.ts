import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'nest_curd_application',
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
});
