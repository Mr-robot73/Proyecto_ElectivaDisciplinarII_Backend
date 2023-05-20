import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private UsersRepository: Repository<User>,
  ) {}

  getAll() {
    return this.UsersRepository.find();
  }

  getOne(id: number) {
    return this.UsersRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const hashPass = await hash(updateUserDto.password, 10);
    return this.UsersRepository.update(
      { id },
      { ...updateUserDto, password: hashPass },
    );
  }

  delete(id: number) {
    return this.UsersRepository.delete({ id });
  }
}
