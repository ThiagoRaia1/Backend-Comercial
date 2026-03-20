import { Material } from "src/material/entities/material.entity";
import { Orcamento } from "src/orcamento/entities/orcamento.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrcamentoMaterial {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Orcamento, (orcamento) => orcamento.materiais)
  orcamento: Orcamento;

  @ManyToOne(() => Material, (material) => material.orcamentos)
  material: Material;

  @Column()
  preco: number; // preço específico nesse orçamento
}