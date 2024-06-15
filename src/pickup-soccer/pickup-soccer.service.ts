import { Injectable } from '@nestjs/common';
import { CreatePickupSoccerDto } from './dto/create-pickup-soccer.dto';
import { UpdatePickupSoccerDto } from './dto/update-pickup-soccer.dto';

@Injectable()
export class PickupSoccerService {
  create(createPickupSoccerDto: CreatePickupSoccerDto) {
    return 'This action adds a new pickupSoccer';
  }

  findAll() {
    return `This action returns all pickupSoccer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pickupSoccer`;
  }

  update(id: number, updatePickupSoccerDto: UpdatePickupSoccerDto) {
    return `This action updates a #${id} pickupSoccer`;
  }

  remove(id: number) {
    return `This action removes a #${id} pickupSoccer`;
  }
}
