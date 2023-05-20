export class UpdateUserDto {
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
