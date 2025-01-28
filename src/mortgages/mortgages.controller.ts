import { Controller, Post, Delete, Body, ParseIntPipe, Param, NotFoundException, Put } from '@nestjs/common';
import { MortgagesService } from './mortgages.service';
import { CreateMortgageDto } from './dtos/CreateMortgage.dto';
import { UpdateMortgageDto } from './dtos/UpdateMortgage.dto';

@Controller('mortgages')
export class MortgagesController {
  constructor(private mortgagesService: MortgagesService) {}

  @Post()
  createMortgage(@Body() createMortgageDto: CreateMortgageDto) {
    return this.mortgagesService.createMortgage(createMortgageDto);
  }

  @Put(':id')
  async updateMortgageById(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateMortgageDto: UpdateMortgageDto
  ) {
    await this.mortgagesService.updateMortgage(id, updateMortgageDto)
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