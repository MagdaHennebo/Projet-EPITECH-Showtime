import { BaseUserDto } from './base-user.dto';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto extends BaseUserDto {
  _id: string;
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
