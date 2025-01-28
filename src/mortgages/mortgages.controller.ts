import { Controller, Post, Delete, Body } from '@nestjs/common';
import { MortgagesService } from './mortgages.service';
import { CreateMortgageDto } from './dtos/CreateMortgage.dto';

@Controller('mortgages')
export class MortgagesController {
  constructor(private mortgagesService: MortgagesService) {}

  @Post()
  createMortgage(@Body() createMortgageDto: CreateMortgageDto) {
    this.mortgagesService.createMortgage(createMortgageDto);
  }

  // @Delete(':id')
  // removeMortgage(@Param('id') id: string) {
  //   return this.mortgagesService.remove(+id);
  // }
}
