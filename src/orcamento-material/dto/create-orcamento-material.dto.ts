import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateOrcamentoMaterialDto {
  @IsNotEmpty()
  @IsNumber()
  orcamentoId: number;

  @IsNotEmpty()
  @IsNumber()
  materialId: number;

  @IsOptional()
  preco: number
}
