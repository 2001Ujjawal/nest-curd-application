import { IsString, IsEmail, IsOptional, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  name: string | null;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
