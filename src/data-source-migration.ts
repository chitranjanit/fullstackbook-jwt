import 'reflect-metadata';
import { DataSource } from 'typeorm';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'fullstackbook-nestjs-jwt',
  migrations: ['./src/migration/*.ts'],
  synchronize: true,
  subscribers: [],
});
