import { Module } from '@nestjs/common';
import { PickupSoccerService } from './pickup-soccer.service';
import { PickupSoccerController } from './pickup-soccer.controller';

@Module({
  controllers: [PickupSoccerController],
  providers: [PickupSoccerService],
})
export class PickupSoccerModule {}
