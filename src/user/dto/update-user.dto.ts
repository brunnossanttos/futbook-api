import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  nickname?: string;

  @ApiProperty()
  shirtNumber?: string;

  @ApiProperty()
  position?: string;

  @ApiProperty()
  cellphone?: string;
}
