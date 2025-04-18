import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContatoController } from './contato.controller';
import { ContatoService } from './contato.service';
import { Contato } from './contato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contato])],
  controllers: [ContatoController],
  providers: [ContatoService],
})
export class ContatoModule {}