import { OrcamentoMaterial } from 'src/orcamento-material/entities/orcamento-material.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Orcamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  enviarPara: string;

  @Column()
  aosCuidados: string;

  @Column()
  departamento: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @Column()
  inscricao: string;

  @Column({ type: 'timestamp' })
  data: Date;

  @Column()
  status: string;

  @Column({ nullable: true })
  motivoRecusa: string;

  @Column()
  usuarioId: number;

  @OneToMany(() => OrcamentoMaterial, (om) => om.orcamento, { cascade: true })
  materiais: OrcamentoMaterial[];
}
