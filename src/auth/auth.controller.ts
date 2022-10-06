import { Controller } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('local/signup')
  signupLocal() {
    return this.authService.signupLocal();
  }

  @Post('local/signin')
  signinLocal() {
    return this.authService.signinLocal();
  }

  @Post('logout')
  logout() {
    return this.authService.logout();
  }

  @Post('refresh')
  refreshTokens() {
    return this.authService.refreshTokens();
  }
}
