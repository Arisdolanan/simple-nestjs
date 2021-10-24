import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeORMConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'db_nest',
    synchronize: true,
    dropSchema: false,
    logging: true,
    autoLoadEntities: true, // entities: ["src/modules/**/entities/*{.js,.ts}"],
    migrationsTableName: 'Migrations_History',
};