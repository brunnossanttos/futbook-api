import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
} from '@nestjs/common';
import { PickupSoccerService } from './pickup-soccer.service';
import { CreatePickupSoccerDto } from './dto/create-pickup-soccer.dto';
import { UpdatePickupSoccerDto } from './dto/update-pickup-soccer.dto';
import { ApiBody, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { IPaginationParams } from 'src/shared/domain/pagination-params';
import { Response } from 'express';

@ApiTags('Peladas')
@Controller('pickup-soccer')
export class PickupSoccerController {
  constructor(private readonly pickupSoccerService: PickupSoccerService) {}

  @Post('/')
  @ApiBody({ type: CreatePickupSoccerDto })
  @ApiOperation({
    summary: 'Criar pelada',
    description: 'Essa rota requer um body com os dados da nova pelada',
  })
  async create(@Body() createPickupSoccerDto: CreatePickupSoccerDto) {
    return await this.pickupSoccerService.create(createPickupSoccerDto);
  }

  @Get('/')
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Número da página',
    example: 1,
  })
  @ApiQuery({
    name: 'pageSize',
    required: false,
    description: 'Quantidade de registros por página',
    example: 10,
  })
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Filtrar pelo nome da pelada',
    example: 'Amigios de Unaí',
  })
  @ApiOperation({
    summary: 'Listar Peladas',
    description: 'Listagem de todas peladas, uso de parametros opcionais',
  })
  async findAll(
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
    @Query('name') name?: string,
  ) {
    const params: IPaginationParams = {
      page: page ? parseInt(page, 10) : undefined,
      pageSize: pageSize ? parseInt(pageSize, 10) : undefined,
      name,
    };

    return await this.pickupSoccerService.findAll(params);
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Busca de uma pelada pelo id',
  })
  async findOne(@Param('id') id: string) {
    return await this.pickupSoccerService.findOne({ id });
  }

  @Patch('/:id')
  @ApiOperation({
    summary: 'Atualizar pelada pelo id',
  })
  async update(
    @Param('id') id: string,
    @Body() updatePickupSoccerDto: UpdatePickupSoccerDto,
  ) {
    return await this.pickupSoccerService.update({ id }, updatePickupSoccerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const response = res
      .status(204)
      .json(await this.pickupSoccerService.remove({ id }));

    return response;
  }
}
