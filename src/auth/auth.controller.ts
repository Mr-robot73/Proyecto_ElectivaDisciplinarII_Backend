import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authLoginDto } from './dto/auth-login.dto';
import { CreateUserDto } from './dto/auth-register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() newUser:CreateUserDto) {
    return this.authService.register(newUser);
  }

  @Post('login')
  login(@Body() user: authLoginDto) {
    return this.authService.login(user);
  }
}
