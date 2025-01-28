import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mortgage } from 'src/typeorm/entities/Mortgage';
import { CreateMortgageParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class MortgagesService {

  constructor(
    @InjectRepository(Mortgage) private mortgageRepository: Repository<Mortgage>,
  ) {}

  createMortgage(mortgageDetails: CreateMortgageParams) {
    const newMortgage = this.mortgageRepository.create({ ...mortgageDetails })
    return this.mortgageRepository.save(newMortgage);
  }

  deleteMortgage(id: number) {
    return this.mortgageRepository.delete({ id });
  }
}
