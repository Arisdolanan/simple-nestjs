import { Controller, Get, Post, Body, Put, Param, Delete, ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  check(){
    return this.usersService.check();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/all')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/all/:id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Put('/all/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('/all/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
