import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mortgage } from 'src/typeorm/entities/Mortgage';
import { CreateMortgageParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { UpdateMortgageDto } from './dtos/UpdateMortgage.dto';
import { Borrower } from 'src/typeorm/entities/Borrower';
import { CreateMortgageBorrowerDto } from './dtos/CreateMortgageBorrower.dto';

@Injectable()
export class MortgagesService {

  constructor(
    @InjectRepository(Mortgage) 
    private mortgageRepository: Repository<Mortgage>,
    @InjectRepository(Borrower) 
    private borrowerRepository: Repository<Borrower>
  ) {}

  async findOneById(id: number) {
    return this.mortgageRepository.findOne({ where: { id } })
  }

  createMortgage(mortgageDetails: CreateMortgageParams) {
    const newMortgage = this.mortgageRepository.create({ ...mortgageDetails })
    return this.mortgageRepository.save(newMortgage);
  }

  updateMortgage(id: number, updateMortgageDetails: UpdateMortgageDto) {
    return this.mortgageRepository.update({ id }, {...updateMortgageDetails })
  }

  deleteMortgage(id: number) {
    return this.mortgageRepository.delete({ id });
  }

  async createMortgageBorrower(id: number, 
  createMortgageBorrowerDto: CreateMortgageBorrowerDto) {
    const mortgage = await this.mortgageRepository.findOne({ 
      where: { id: id },
      relations: ['borrower'],
    })
    if (!mortgage) 
      throw new HttpException(
    'Mortgage not found. Cannot create borrower', 
      HttpStatus.BAD_REQUEST
    )

    const newBorrower = this.borrowerRepository.create(createMortgageBorrowerDto)
  
    const savedBorrower = await this.borrowerRepository.save(newBorrower)
    mortgage.borrower = savedBorrower
  
    return this.mortgageRepository.save(mortgage)
  }
}
