import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { HeaderGuard } from './guards/header/header.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @ApiTags('users')
    @Get()
    getUsers(){
        return this.usersService.getUsers();
    }

    @ApiTags('users')
    @Post()
    @UsePipes(new ValidationPipe())
    @HttpCode(201) //Personalizar el codigo de retorno de el endpoint.
    createUser(@Body()  user: CreateUserDto){
        return this.usersService.createUser(user);
    }

    @Get('sum/:num')
    processNumber(@Param('num', ParseIntPipe) num: number): number{ //Todos los params llegan como string, se debe agregar el pipe de parseo.
        return num + 100;
    }

    @Get('bool/:active')
    @UseGuards(HeaderGuard)
    processBool(@Param('active', ParseBoolPipe) active: boolean): boolean{ 
        //Todos los params llegan como string, se debe agregar el pipe de parseo.
        return active;
    }

    @Get('greet')
    @UseGuards(HeaderGuard)
    greet(@Query(ValidateUserPipe) query: {name: string, age: number}){
        console.log(typeof(query.age));
        console.log(typeof(query.name));
        //Todos los params llegan como string, se debe agregar el pipe de parseo.
        return `Hello your name is ${query.name} and your age is ${query.age}`;
    }


}
