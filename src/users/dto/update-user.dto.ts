import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  email: string;
  password: string;
  name: string;
  lastname: string;
  identification: string;
  picture?: string;
  phone?: string;
  birthday?: string;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
  active?: boolean;
  gender?: string;
}
