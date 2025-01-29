import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Borrower } from 'src/typeorm/entities/Borrower';

@Module({
  imports: [TypeOrmModule.forFeature([Borrower])],
  exports: [TypeOrmModule], 
})
export class BorrowersModule {}