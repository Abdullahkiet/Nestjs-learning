import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  //Validation decorators
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
