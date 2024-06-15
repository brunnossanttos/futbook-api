import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PickupSoccerModule } from './pickup-soccer/pickup-soccer.module';

@Module({
  imports: [UserModule, PickupSoccerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
