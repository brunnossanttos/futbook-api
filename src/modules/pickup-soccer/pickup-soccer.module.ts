import { Module } from '@nestjs/common';
import { PickupSoccerService } from './pickup-soccer.service';
import { PickupSoccerController } from './pickup-soccer.controller';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';

@Module({
  controllers: [PickupSoccerController],
  providers: [PickupSoccerService, PrismaService],
})
export class PickupSoccerModule {}
