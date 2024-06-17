import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePickupSoccerDto } from './create-pickup-soccer.dto';

export class UpdatePickupSoccerDto extends PartialType(CreatePickupSoccerDto) {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  time?: string;

  @ApiProperty()
  local?: string;

  @ApiProperty()
  status?: boolean;

  @ApiProperty()
  field?: string;
}
