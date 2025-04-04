import { Controller, Post, Body, Get } from '@nestjs/common';
import { ContatoService } from './contato.service';
import { Contato } from './contato.entity';
import { CreateContatoDto } from './DTOs/create-contato.dto';

@Controller('contato')
export class ContatoController {
  constructor(private readonly contatoService: ContatoService) {}

  @Post()
  async create(@Body() createContatoDto: CreateContatoDto): Promise<Contato> {
    return this.contatoService.create(createContatoDto);
  }

  @Get()
  async findAll(): Promise<Contato[]> {
    return this.contatoService.findAll();
  }
}