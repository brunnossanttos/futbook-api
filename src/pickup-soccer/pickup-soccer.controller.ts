import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PickupSoccerService } from './pickup-soccer.service';
import { CreatePickupSoccerDto } from './dto/create-pickup-soccer.dto';
import { UpdatePickupSoccerDto } from './dto/update-pickup-soccer.dto';

@Controller('pickup-soccer')
export class PickupSoccerController {
  constructor(private readonly pickupSoccerService: PickupSoccerService) {}

  @Post()
  create(@Body() createPickupSoccerDto: CreatePickupSoccerDto) {
    return this.pickupSoccerService.create(createPickupSoccerDto);
  }

  @Get()
  findAll() {
    return this.pickupSoccerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pickupSoccerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePickupSoccerDto: UpdatePickupSoccerDto,
  ) {
    return this.pickupSoccerService.update(+id, updatePickupSoccerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pickupSoccerService.remove(+id);
  }
}
