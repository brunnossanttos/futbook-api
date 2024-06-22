import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { PasswordHashService } from 'src/shared/password-hash.service';
import { User, UserToken } from '@prisma/client';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

interface IPayload {
  sub: string;
  email: string;
}
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private hashedService: PasswordHashService,
    private prismaService: PrismaService<UserToken | User>,
  ) {}
  async signIn(
    email: string,
    password: string,
  ): Promise<{ userId: string; accessToken: string; refreshToken: string }> {
    const user = await this.userService.findOne({ email });
    const validedPassword = await this.hashedService.validatePassword(
      password,
      user.password,
    );
    if (!validedPassword) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email };

    const accessToken = await this.jwtService.signAsync(payload);
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '364d',
    });

    const data = {
      userId: user.id,
      token: refreshToken,
      expiresDate: new Date(new Date().setDate(new Date().getDate() + 364)),
    };

    await this.prismaService.userToken.create({
      data,
    });

    return {
      userId: user.id,
      accessToken,
      refreshToken,
    };
  }

  async refreshToken(refreshToken: string) {
    const { email, sub: userId } = this.jwtService.verify(
      refreshToken,
    ) as IPayload;

    const user = await this.prismaService.user.findFirst({
      where: { id: userId, email },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    const userToken = await this.prismaService.userToken.findFirst({
      where: { userId, token: refreshToken },
    });

    if (!userToken) {
      throw new UnauthorizedException();
    }

    await this.prismaService.userToken.delete({
      where: { id: userToken.id },
    });

    const payload = { sub: user.id, email: user.email };

    const newAccessToken = await this.jwtService.signAsync(payload);

    const newRefreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '364d',
    });

    const data = {
      userId: user.id,
      token: newRefreshToken,
      expiresDate: new Date(new Date().setDate(new Date().getDate() + 364)),
    };

    await this.prismaService.userToken.create({
      data,
    });

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
  }

  async socialLogin(createUserDto: CreateUserDto) {
    if (!createUserDto.googleId && !createUserDto.appleId) {
      throw new UnauthorizedException(
        'Google Id not informed or Apple Id not informed',
      );
    }

    const user = await this.handleGoogleOrAppleUser(createUserDto);

    const payload = { sub: user.id, email: user.email };

    const accessToken = await this.jwtService.signAsync(payload);
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '364d',
    });

    return {
      accessToken,
      refreshToken,
      userId: user.id,
      createdAt: user.createdAt,
      googleId: user.googleId,
      appleId: user.appleId,
    };
  }

  async handleGoogleOrAppleUser(createUserDto: CreateUserDto) {
    let user: User | undefined;
    if (createUserDto.googleId) {
      user = await this.prismaService.user.findFirst({
        where: { googleId: createUserDto.googleId, email: createUserDto.email },
      });

      if (!user) {
        user = await this.userService.create(createUserDto);
      }
    }

    if (createUserDto.appleId) {
      user = await this.prismaService.user.findFirst({
        where: { appleId: createUserDto.appleId, email: createUserDto.email },
      });

      if (!user) {
        user = await this.userService.create(createUserDto);
      }
    }

    if (!user) {
      throw new UnauthorizedException('User could not be created or found.');
    }

    return user;
  }
}
