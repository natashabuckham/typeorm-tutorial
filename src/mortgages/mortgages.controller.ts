import { Controller, Post, Delete, Body, ParseIntPipe, Param, NotFoundException } from '@nestjs/common';
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
  async deleteMortgageById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    const mortgage = await this.mortgagesService.findOneById(id)
    if (!mortgage) {
      throw new NotFoundException(`Entity with ID ${id} not found`)
    }
    await this.mortgagesService.deleteMortgage(id);
  }
}
