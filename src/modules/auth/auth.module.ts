import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { PasswordHashService } from 'src/shared/password-hash.service';
import { UserService } from '../user/user.service';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { jwtConstants } from './constants';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '6h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PasswordHashService, UserService, PrismaService],
})
export class AuthModule {}
