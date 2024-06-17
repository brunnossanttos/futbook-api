import { ApiProperty } from '@nestjs/swagger';

export class CreatePickupSoccerDto {
  @ApiProperty()
  createdBy: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  time: string;

  @ApiProperty()
  local: string;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  field: string;
}
