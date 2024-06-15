import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { PasswordHashService } from 'src/shared/password-hash.service';
import { Prisma, User } from '@prisma/client';
import { IPaginationParams } from 'src/shared/domain/pagination-params';
import { PlayerPosition } from 'src/shared/domain/enum-positions';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    private prismaService: PrismaService<User>,

    private readonly passwordHashedService: PasswordHashService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userAlredyExists = await this.prismaService.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    if (userAlredyExists) {
      throw new Error('User already exists');
    }

    const hashedPassword = await this.passwordHashedService.hashPassword(
      createUserDto.password,
    );

    const setPosition = PlayerPosition[createUserDto.position];

    const data = {
      ...createUserDto,
      password: hashedPassword,
      position: setPosition,
    };

    const user = await this.prismaService.user.create({ data: data });

    return user;
  }

  async findAll(params: IPaginationParams): Promise<User[]> {
    const { page = 1, pageSize = 10, name } = params || {};
    const skip = (page - 1) * pageSize;
    const take = pageSize;

    const where: any = {};

    if (name) {
      where.name = {
        contains: name,
      };
    }

    return await this.prismaService.user.findMany({
      where,
      skip,
      take,
    });
  }

  async findOne(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return await this.prismaService.user.findUnique({ where });
  }

  async update(
    where: Prisma.UserWhereUniqueInput,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const user = await this.prismaService.user.findUnique({ where });

    if (!user) {
      throw new Error('User not found');
    }

    return await this.prismaService.user.update({
      where,
      data: updateUserDto,
    });
  }

  async remove(where: Prisma.UserWhereUniqueInput): Promise<void> {
    const user = await this.prismaService.user.findUnique({ where });

    if (!user) {
      throw new Error('User not found');
    }

    await this.prismaService.user.delete({ where });

    return;
  }
}
