import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('/api/v1/role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  check(){
    return this.roleService.check();
  }

  @Get('/all')
  findAll() {
    return this.roleService.findAll();
  }

  @Get('/all/:id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @Put('/all/:id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(+id, updateRoleDto);
  }

  @Delete('/all/:id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }
}
