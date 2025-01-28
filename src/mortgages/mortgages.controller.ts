import { Controller, Post, Delete, Body, ParseIntPipe, Param } from '@nestjs/common';
import { MortgagesService } from './mortgages.service';
import { CreateMortgageDto } from './dtos/CreateMortgage.dto';

@Controller('mortgages')
export class MortgagesController {
  constructor(private mortgagesService: MortgagesService) {}

  @Post()
  createMortgage(@Body() createMortgageDto: CreateMortgageDto) {
    return this.mortgagesService.createMortgage(createMortgageDto);
  }

  @Delete(':id')
  async deleteMortgageById(@Param('id', ParseIntPipe) id: number) {
    await this.mortgagesService.deleteMortgage(id);
  }
}
