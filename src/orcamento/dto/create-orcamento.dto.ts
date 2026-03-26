import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateMaterialDto } from 'src/material/dto/create-material.dto';

export class CreateOrcamentoDto {
  @IsNotEmpty()
  @IsString()
  enviarPara: string;

  @IsOptional()
  @IsString()
  aosCuidados?: string;

  @IsOptional()
  @IsString()
  departamento?: string;

  @IsOptional()
  @IsString()
  telefone?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  inscricao?: string;

  @IsNotEmpty()
  @IsDateString()
  data: string; // data enviada pelo front como string ISO

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  motivoRecusa?: string;

  @IsNotEmpty()
  usuarioId: number;

  @IsArray()
  materiais: CreateMaterialDto[];
}
