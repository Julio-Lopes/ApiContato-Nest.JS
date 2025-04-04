import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateContatoDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  message: string;
}