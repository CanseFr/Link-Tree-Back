import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BranchsService } from './branchs.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BranchEntity } from './entities/branch.entity';

@Controller('branchs')
@ApiTags('Branchs')
export class BranchsController {
  constructor(private readonly branchsService: BranchsService) {}

  @Post()
  @ApiOkResponse({ type: BranchEntity })
  async create(@Body() createBranchDto: CreateBranchDto) {
    return new BranchEntity(await this.branchsService.create(createBranchDto));
  }

  @Get()
  @ApiOkResponse({ type: BranchEntity, isArray: true })
  async findAll() {
    const articles = await this.branchsService.findAll();
    return articles.map((branch) => new BranchEntity(branch));
  }

  @Get(':id')
  @ApiOkResponse({ type: BranchEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new BranchEntity(await this.branchsService.findOne(id));
  }

  @Patch(':id')
  @ApiOkResponse({ type: BranchEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBranchDto: UpdateBranchDto,
  ) {
    return new BranchEntity(
      await this.branchsService.update(id, updateBranchDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: BranchEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new BranchEntity(await this.branchsService.remove(id));
  }
}
