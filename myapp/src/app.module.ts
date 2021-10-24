import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfig} from './config/typeorm.config'; 
import { UsersModule } from './modules/users/users.module';
import { RoleModule } from './modules/role/role.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeORMConfig),
    UsersModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersModule, RoleModule],
})
export class AppModule {}
