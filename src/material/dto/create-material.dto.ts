// create-material.dto.ts
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMaterialDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsOptional()
  @IsNumber()
  preco?: number; // opcional porque pode usar o preço do material já existente
}
