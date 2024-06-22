import { PartialType } from '@nestjs/swagger';
import { CreateAvatarHeaderDto } from './create-avatar-header.dto';

export class UpdateAvatarHeaderDto extends PartialType(CreateAvatarHeaderDto) {}
