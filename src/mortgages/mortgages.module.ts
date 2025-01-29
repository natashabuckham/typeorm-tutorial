import { Module } from '@nestjs/common';
import { MortgagesService } from './mortgages.service';
import { MortgagesController } from './mortgages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mortgage } from 'src/typeorm/entities/Mortgage';
import { Borrower } from 'src/typeorm/entities/Borrower';
import { BorrowersModule } from 'src/borrowers/borrowers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Mortgage, Borrower]), BorrowersModule],
  controllers: [MortgagesController],
  providers: [MortgagesService],
})
export class MortgagesModule {}
