import { Module } from '@nestjs/common';
import { MortgagesService } from './mortgages.service';
import { MortgagesController } from './mortgages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mortgage } from 'src/typeorm/entities/Mortgage';

@Module({
  imports: [TypeOrmModule.forFeature([Mortgage])],
  controllers: [MortgagesController],
  providers: [MortgagesService],
})
export class MortgagesModule {}
