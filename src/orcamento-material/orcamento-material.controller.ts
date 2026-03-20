import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrcamentoMaterialService } from './orcamento-material.service';
import { CreateOrcamentoMaterialDto } from './dto/create-orcamento-material.dto';
import { UpdateOrcamentoMaterialDto } from './dto/update-orcamento-material.dto';

@Controller('orcamento-material')
export class OrcamentoMaterialController {
  constructor(private readonly orcamentoMaterialService: OrcamentoMaterialService) {}

  @Post()
  create(@Body() createOrcamentoMaterialDto: CreateOrcamentoMaterialDto) {
    return this.orcamentoMaterialService.create(createOrcamentoMaterialDto);
  }

  @Get()
  findAll() {
    return this.orcamentoMaterialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orcamentoMaterialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrcamentoMaterialDto: UpdateOrcamentoMaterialDto) {
    return this.orcamentoMaterialService.update(+id, updateOrcamentoMaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orcamentoMaterialService.remove(+id);
  }
}
