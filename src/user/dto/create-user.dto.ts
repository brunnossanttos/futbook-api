import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  nickname?: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  shirtNumber?: string;

  @ApiProperty()
  position?: string;

  @ApiProperty()
  cellphone?: string;

  @ApiProperty()
  birthDate?: string;

  @ApiProperty()
  googleId?: string;

  @ApiProperty()
  appleId?: string;
}
