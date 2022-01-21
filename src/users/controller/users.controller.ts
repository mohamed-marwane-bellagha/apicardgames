import {Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put} from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserInterface } from "../model/user.interface";
import { Observable } from "rxjs";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
   create( @Body() user: UserInterface):Observable<UserInterface> {
    return this.usersService.create(user);
  }

  @Get()
  findAll(): Observable<UserInterface[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Observable<UserInterface> {
    return this.usersService.findOne(params.id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user:UserInterface ): Observable<any> {
    return this.usersService.update(+id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Observable<UserInterface> {
    return this.usersService.remove(Number(id));
  }
}
