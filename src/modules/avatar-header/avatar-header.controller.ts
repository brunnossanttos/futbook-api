import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AvatarHeaderService } from './avatar-header.service';
import { CreateAvatarHeaderDto } from './dto/create-avatar-header.dto';
import { UpdateAvatarHeaderDto } from './dto/update-avatar-header.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Avatar & Header')
@Controller('avatarHeader')
export class AvatarHeaderController {
  constructor(private readonly avatarHeaderService: AvatarHeaderService) {}

  @Post()
  @ApiBody({ type: CreateAvatarHeaderDto })
  @ApiOperation({ summary: 'Criar avatar header' })
  create(@Body() createAvatarHeaderDto: CreateAvatarHeaderDto) {
    return this.avatarHeaderService.create(createAvatarHeaderDto);
  }

  @Get()
  findAll() {
    return this.avatarHeaderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avatarHeaderService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAvatarHeaderDto: UpdateAvatarHeaderDto,
  ) {
    return this.avatarHeaderService.update(id, updateAvatarHeaderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avatarHeaderService.remove(id);
  }
}
