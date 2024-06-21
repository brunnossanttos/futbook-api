import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { PickupSoccerModule } from './modules/pickup-soccer/pickup-soccer.module';
import { AuthModule } from './modules/auth/auth.module';
import { EnvConfigModule } from './shared/Config/env-config.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    PickupSoccerModule,
    AuthModule,
    EnvConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
