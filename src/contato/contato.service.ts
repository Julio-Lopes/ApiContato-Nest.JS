import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contato } from './contato.entity';

@Injectable()
export class ContatoService {
  constructor(
    @InjectRepository(Contato)
    private ContatoRepository: Repository<Contato>,
  ) {}

  async create(contato: Partial<Contato>): Promise<Contato> {
    const newContato = this.ContatoRepository.create(contato);
    return this.ContatoRepository.save(newContato);
  }

  async findAll(): Promise<Contato[]> {
    return this.ContatoRepository.find();
  }
}

