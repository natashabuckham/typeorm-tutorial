import { IsString } from 'class-validator';

export class CreateMortgageBorrowerDto {
  @IsString()
  companyName: string;

  @IsString()
  contactFirstName: string;

  @IsString()
  contactLastName: string;

  @IsString()
  industry: string;
}
