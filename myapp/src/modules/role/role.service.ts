import { Role } from './entities/role.entity';
import { RoleRepository } from './repository/role.repository';
import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoleService {
  constructor(@InjectRepository(RoleRepository) private roleRepository:RoleRepository){}

  check(){
    return 'modules role';
  }

  async create(createRoleDto: CreateRoleDto) {
    const tempCreateRoleDto = await this.roleRepository.create(createRoleDto)
    await this.roleRepository.save(tempCreateRoleDto)
    return tempCreateRoleDto;
  }

  async findAll(): Promise<Role[]> {
    return await this.roleRepository.find()
  }

  async findOne(id: number) {
    return await this.roleRepository.findOne(id);;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    await this.roleRepository.update(id, updateRoleDto);
    return await this.roleRepository.findOne(id);
  }

  async remove(id: number) {
    return await this.roleRepository.delete(id);
  }
}
