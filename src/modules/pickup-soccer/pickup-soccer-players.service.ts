import { Injectable, Logger } from '@nestjs/common';
import { UserPickupSoccer } from '@prisma/client';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { PickupSoccerService } from './pickup-soccer.service';
import { UserService } from '../user/user.service';

@Injectable()
export class PickupSoccerPlayersService {
  private readonly logger = new Logger(PickupSoccerPlayersService.name);

  constructor(
    private prismaService: PrismaService<UserPickupSoccer>,
    private readonly pickupSoccerService: PickupSoccerService,
    private readonly usersService: UserService,
  ) {}

  async create(pickupSoccerId: string, userIds: string[]) {
    const pickupSoccer = await this.prismaService.pickupSoccer.findUnique({
      where: { id: pickupSoccerId },
    });

    if (!pickupSoccer) {
      throw new Error('Not found');
    }

    const createdPlayers = userIds.map(async (userId) => {
      const userExists = await this.prismaService.userPickupSoccer.findFirst({
        where: { userId, pickupSoccerId },
      });

      if (userExists) {
        throw new Error('User already exists');
      }
      const userPickupSoccer = await this.prismaService.userPickupSoccer.create(
        {
          data: {
            pickupSoccerId,
            userId,
          },
        },
      );

      return userPickupSoccer;
    });

    return Promise.all(createdPlayers);
  }

  async remove(userPickupSoccerId: string) {
    const userExists = await this.prismaService.userPickupSoccer.findUnique({
      where: { id: userPickupSoccerId },
    });

    if (!userExists) {
      throw new Error('Player do not exists');
    }

    await this.prismaService.userPickupSoccer.delete({
      where: { id: userPickupSoccerId },
    });
  }
}
