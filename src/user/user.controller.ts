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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { IPaginationParams } from 'src/shared/domain/pagination-params';
import { Response } from 'express';

@ApiTags('Usuários')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  @ApiBody({ type: CreateUserDto })
  @ApiOperation({
    summary: 'Criar usuário',
    description: 'Essa rota requer um body com os dados do novo usuário',
  })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
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
    description: 'Filtrar pelo nome do usuário',
    example: 'John Doe',
  })
  @ApiOperation({
    summary: 'Listar usuários',
    description: 'Listagem de todos os usuários, uso de parametros opcionais',
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

    return this.userService.findAll(params);
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Busca de um usuário pelo id',
  })
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne({ id });
  }

  @Patch('/id')
  @ApiOperation({
    summary: 'Atualizar usuário pelo id',
  })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update({ id }, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar usuário pelo id',
  })
  async remove(@Param('id') id: string, @Res() res: Response) {
    const response = res
      .status(204)
      .json(await this.userService.remove({ id }));

    return response;
  }
}
