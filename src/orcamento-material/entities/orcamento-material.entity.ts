import { Material } from 'src/material/entities/material.entity';
import { Orcamento } from 'src/orcamento/entities/orcamento.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class OrcamentoMaterial {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Orcamento, (o) => o.materiais)
  @JoinColumn({ name: 'orcamentoId' })
  orcamento: Orcamento;

  @ManyToOne(() => Material, (m) => m.orcamentos, { cascade: ['insert'] })
  @JoinColumn({ name: 'materialId' })
  material: Material;

  @Column('decimal', { nullable: true, precision: 10, scale: 2 })
  preco?: number;
}
