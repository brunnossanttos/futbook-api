import { Injectable, Logger } from '@nestjs/common';
import { CreateAvatarHeaderDto } from './dto/create-avatar-header.dto';
import { UpdateAvatarHeaderDto } from './dto/update-avatar-header.dto';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { AvatarHeader } from '@prisma/client';
import { CloudinaryStoredProvider } from 'src/shared/providers/cloudinary-stored.provider';

@Injectable()
export class AvatarHeaderService {
  private readonly logger = new Logger(AvatarHeaderService.name);

  constructor(
    private prismaService: PrismaService<AvatarHeader>,
    private cloudinaryStoredProvider: CloudinaryStoredProvider,
  ) {}
  async create(createAvatarHeaderDto: CreateAvatarHeaderDto) {
    let avatarHeader: AvatarHeader | undefined;

    if (createAvatarHeaderDto.userId) {
      avatarHeader = await this.prismaService.avatarHeader.findFirst({
        where: { userId: createAvatarHeaderDto.userId },
      });
    } else {
      avatarHeader = await this.prismaService.avatarHeader.findFirst({
        where: { pickupSoccerId: createAvatarHeaderDto.pickupSoccerId },
      });
    }

    if (avatarHeader) {
      throw new Error('User already has an avatar header');
    }

    const { url: avatarUrl } = await this.cloudinaryStoredProvider.upload(
      createAvatarHeaderDto.avatarUrl,
    );

    const { url: headerUrl } = await this.cloudinaryStoredProvider.upload(
      createAvatarHeaderDto.headerUrl,
    );

    const data = {
      ...createAvatarHeaderDto,
      avatarUrl,
      headerUrl,
    };

    return await this.prismaService.avatarHeader.create({ data });
  }

  findAll() {
    return `This action returns all avatarHeader`;
  }

  findOne(id: string) {
    return `This action returns a #${id} avatarHeader`;
  }

  update(id: string, updateAvatarHeaderDto: UpdateAvatarHeaderDto) {
    console.log(
      '🚀 ~ AvatarHeaderService ~ update ~ updateAvatarHeaderDto:',
      updateAvatarHeaderDto,
    );
    return `This action updates a #${id} avatarHeader`;
  }

  remove(id: string) {
    return `This action removes a #${id} avatarHeader`;
  }
}
