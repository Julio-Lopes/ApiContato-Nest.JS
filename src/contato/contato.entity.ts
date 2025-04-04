import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Contato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  message: string;
}