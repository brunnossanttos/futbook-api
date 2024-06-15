import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { PasswordHashService } from 'src/shared/password-hash.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, PasswordHashService],
})
export class UserModule {}
