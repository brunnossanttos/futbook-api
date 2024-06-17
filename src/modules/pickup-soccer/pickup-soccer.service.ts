import { Injectable, Logger } from '@nestjs/common';
import { CreatePickupSoccerDto } from './dto/create-pickup-soccer.dto';
import { UpdatePickupSoccerDto } from './dto/update-pickup-soccer.dto';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { PickupSoccer, Prisma } from '@prisma/client';
import { IPaginationParams } from 'src/shared/domain/pagination-params';

@Injectable()
export class PickupSoccerService {
  private readonly logger = new Logger(PickupSoccerService.name);

  constructor(private prismaService: PrismaService<PickupSoccer>) {}
  async create(
    createPickupSoccerDto: CreatePickupSoccerDto,
  ): Promise<PickupSoccer> {
    return await this.prismaService.pickupSoccer.create({
      data: createPickupSoccerDto,
    });
  }

  async findAll(params: IPaginationParams): Promise<PickupSoccer[]> {
    const { page = 1, pageSize = 10, name } = params || {};
    const skip = (page - 1) * pageSize;
    const take = pageSize;

    const where: any = {};

    if (name) {
      where.name = {
        contains: name,
      };
    }

    return await this.prismaService.pickupSoccer.findMany({
      where,
      skip,
      take,
    });
  }

  async findOne(
    where: Prisma.PickupSoccerWhereUniqueInput,
  ): Promise<PickupSoccer> {
    return await this.prismaService.pickupSoccer.findUnique({
      where,
    });
  }

  async update(
    where: Prisma.PickupSoccerWhereUniqueInput,
    updatePickupSoccerDto: UpdatePickupSoccerDto,
  ): Promise<PickupSoccer> {
    const pickupSoccer = await this.prismaService.pickupSoccer.findUnique({
      where,
    });

    if (!pickupSoccer) {
      throw new Error('PickupSoccer not found');
    }

    return await this.prismaService.update('pickupSoccer', where, {
      data: updatePickupSoccerDto,
    });
  }

  async remove(where: Prisma.PickupSoccerWhereUniqueInput): Promise<void> {
    const pickupSoccer = await this.prismaService.pickupSoccer.findUnique({
      where,
    });

    if (!pickupSoccer) {
      throw new Error('PickupSoccer not found');
    }

    await this.prismaService.pickupSoccer.delete({
      where,
    });
  }
}
