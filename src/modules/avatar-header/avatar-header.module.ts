import { Module } from '@nestjs/common';
import { AvatarHeaderService } from './avatar-header.service';
import { AvatarHeaderController } from './avatar-header.controller';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { CloudinaryStoredProvider } from 'src/shared/providers/cloudinary-stored.provider';

@Module({
  controllers: [AvatarHeaderController],
  providers: [AvatarHeaderService, PrismaService, CloudinaryStoredProvider],
})
export class AvatarHeaderModule {}
