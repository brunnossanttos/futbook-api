import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { PickupSoccerModule } from './modules/pickup-soccer/pickup-soccer.module';

@Module({
  imports: [UserModule, PickupSoccerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
