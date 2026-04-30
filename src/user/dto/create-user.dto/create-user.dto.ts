import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsEnum,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DELETED = 'DELETED',
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsString()
  phone_no: string;

  @IsOptional()
  @IsBoolean()
  is_email_verify: boolean;

  @IsOptional()
  @IsEnum(UserStatus)
  status: UserStatus;
}
