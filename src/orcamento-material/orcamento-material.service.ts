import { Injectable } from '@nestjs/common';
import { CreateOrcamentoMaterialDto } from './dto/create-orcamento-material.dto';
import { UpdateOrcamentoMaterialDto } from './dto/update-orcamento-material.dto';

@Injectable()
export class OrcamentoMaterialService {
  create(createOrcamentoMaterialDto: CreateOrcamentoMaterialDto) {
    return 'This action adds a new orcamentoMaterial';
  }

  findAll() {
    return `This action returns all orcamentoMaterial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orcamentoMaterial`;
  }

  update(id: number, updateOrcamentoMaterialDto: UpdateOrcamentoMaterialDto) {
    return `This action updates a #${id} orcamentoMaterial`;
  }

  remove(id: number) {
    return `This action removes a #${id} orcamentoMaterial`;
  }
}
