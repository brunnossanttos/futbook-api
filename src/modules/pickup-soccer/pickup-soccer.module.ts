import { Module } from '@nestjs/common';
import { PickupSoccerService } from './pickup-soccer.service';
import { PickupSoccerController } from './pickup-soccer.controller';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { PickupSoccerPlayersService } from './pickup-soccer-players.service';
import { UserService } from '../user/user.service';
import { PasswordHashService } from 'src/shared/password-hash.service';

@Module({
  controllers: [PickupSoccerController],
  providers: [
    PickupSoccerService,
    PrismaService,
    PickupSoccerPlayersService,
    UserService,
    PasswordHashService,
  ],
})
export class PickupSoccerModule {}
