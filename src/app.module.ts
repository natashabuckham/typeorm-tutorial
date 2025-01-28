import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mortgage } from './typeorm/entities/Mortgage';
import { MortgagesModule } from './mortgages/mortgages.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: ,
    port: ,
    username: ',
    password: ,
    database: ,
    entities: [Mortgage],
    synchronize: ,
  }), MortgagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
