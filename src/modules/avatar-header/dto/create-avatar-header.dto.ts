import { ApiProperty } from '@nestjs/swagger';

export class CreateAvatarHeaderDto {
  @ApiProperty()
  userId?: string;

  @ApiProperty()
  pickupSoccerId?: string;

  @ApiProperty()
  avatarUrl: string;

  @ApiProperty()
  headerUrl: string;
}
