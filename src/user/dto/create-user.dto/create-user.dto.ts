import { IsString, IsEmail, MinLength, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  name: string | null;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
