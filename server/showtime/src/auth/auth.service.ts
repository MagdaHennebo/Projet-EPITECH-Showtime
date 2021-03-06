import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from 'src/user/schemas/user.schema';
import { UserService } from 'src/user/user.service';
import { AuthLoginDto } from './dto/auth.login-dto';
import { Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(authLoginDto: AuthLoginDto) {
    const user = await this.validateUser(authLoginDto);

    const payload = {
      userId: user._id,
    };

    return {
      userId: user._id,
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(authLoginDto: AuthLoginDto): Promise<User> {
    const { email, password } = authLoginDto;

    const user = await this.userService.findByEmail(email);
    const result = bcrypt.compareSync(password, user['password']);

    if (result == false) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
