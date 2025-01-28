import { PartialType } from "@nestjs/mapped-types";
import { CreateMortgageDto } from "./CreateMortgage.dto";

export class UpdateMortgageDto extends PartialType(CreateMortgageDto) {}
