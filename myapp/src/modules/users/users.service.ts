import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserRepository) private userRepository: UserRepository) {}

  check(){
    return 'modules users';
  }

  async create(createUserDto: CreateUserDto) {
    const tempCreateUserDto = await this.userRepository.create(createUserDto)
    await this.userRepository.save(tempCreateUserDto)
    return tempCreateUserDto;
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({ relations: ["role"] })
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);
    return await this.userRepository.findOne(id);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
