import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator"
export class CreateUserDto {

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
    
    @IsString()
    name: string;
}