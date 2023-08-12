import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  //Validation decorators

  //Validate email
  @IsEmail()
  email: string;

  //Validate password
  @IsString()
  password: string;
}
