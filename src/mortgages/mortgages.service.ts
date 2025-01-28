import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mortgage } from 'src/typeorm/entities/Mortgage';
import { CreateMortgageParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { UpdateMortgageDto } from './dtos/UpdateMortgage.dto';

@Injectable()
export class MortgagesService {

  constructor(
    @InjectRepository(Mortgage) 
    private mortgageRepository: Repository<Mortgage>,
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
}
