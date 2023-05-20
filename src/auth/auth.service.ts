import { HttpException, Injectable } from '@nestjs/common';
import { authLoginDto } from './dto/auth-login.dto';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/auth-register.dto';
import { hash,compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private UsersRepository: Repository<User>,
  ) {}

  async register(newUser: CreateUserDto): Promise<any> {
    const email = await this.UsersRepository.findOne({
      where: { email: newUser.email },
    });

    if (email) return new HttpException('el email ya existe', 404);

    const password = await hash(newUser.password, 10);
    const data = this.UsersRepository.create({ ...newUser, password })
    this.UsersRepository.save(data);
    return new HttpException('se a registado correctamente',201)
  }
  async login(user: authLoginDto) {
    const { email, password} = user;
    const findUser = await this.UsersRepository.findOne({ where: { email } });

    if (!findUser) throw new HttpException('el email o la passwor es incorrecta',404);

    const checkPass = await compare(password,findUser.password);


    if (!checkPass) throw new HttpException('el email o la passwor es incorrecta',404);

    const data = findUser
    return data
  }
}
