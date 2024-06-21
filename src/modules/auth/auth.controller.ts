import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateLoginDto } from './dto/create-login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiBody({ type: CreateLoginDto })
  @ApiOperation({
    summary: 'Login',
    description: 'Essa rota requer um body com os dados do login do  usuário',
  })
  async signIn(@Body() signInDto: CreateLoginDto) {
    return await this.authService.signIn(signInDto.email, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('refreshToken')
  @ApiBody({ type: RefreshTokenDto })
  @ApiOperation({
    summary: 'Reautenticar',
    description: 'Essa rota requer um body com os dados para reuautenticação',
  })
  async refreshToken(@Body() { refreshToken }: RefreshTokenDto) {
    return await this.authService.refreshToken(refreshToken);
  }
}
