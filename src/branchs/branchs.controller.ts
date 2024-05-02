import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BranchsService } from './branchs.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { BranchEntity } from "./entities/branch.entity";

@Controller('branchs')
@ApiTags('Branchs')
export class BranchsController {
  constructor(private readonly branchsService: BranchsService) {}

  @Post()
  @ApiOkResponse({type: BranchEntity})
  create(@Body() createBranchDto: CreateBranchDto) {
    return this.branchsService.create(createBranchDto);
  }

  @Get()
  @ApiOkResponse({type: BranchEntity, isArray: true})
  findAll() {
    return this.branchsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: BranchEntity})
  findOne(@Param('id') id: string) {
    return this.branchsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({type: BranchEntity})
  update(@Param('id') id: string, @Body() updateBranchDto: UpdateBranchDto) {
    return this.branchsService.update(+id, updateBranchDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: BranchEntity})
  remove(@Param('id') id: string) {
    return this.branchsService.remove(+id);
  }
}