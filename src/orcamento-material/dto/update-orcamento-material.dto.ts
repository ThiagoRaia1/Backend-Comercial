import { PartialType } from '@nestjs/mapped-types';
import { CreateOrcamentoMaterialDto } from './create-orcamento-material.dto';

export class UpdateOrcamentoMaterialDto extends PartialType(CreateOrcamentoMaterialDto) {}
