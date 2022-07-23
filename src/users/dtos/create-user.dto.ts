import { IsEmail, IsString } from 'class-validator'; // eslint-disable-line

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
