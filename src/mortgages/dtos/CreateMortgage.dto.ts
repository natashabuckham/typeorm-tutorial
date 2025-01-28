import { Type } from "@nestjs/class-transformer";
import { IsDateString, IsNumber, Matches } from "@nestjs/class-validator";

export class CreateMortgageDto {
    @Matches(/^(\d+(\.\d{1,2})?)$/, { message: 'Amount must be a valid number with no more than two decimal places and must be represented as a string' })
    @Type(() => Number)
    loanAmount: number;

    @IsNumber({}, { message: 'Field must be a float' })
    @Type(() => Number)
    interestRate: number;

    @IsDateString({}, { message: 'Field must be a valid date' })
    @Type(() => Date)
    endDate: Date;
}