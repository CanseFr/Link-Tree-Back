import { Injectable } from '@nestjs/common';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BranchsService {
  constructor(private prisma: PrismaService) {}

  create(createBranchDto: CreateBranchDto) {
    return this.prisma.branch.create({ data: createBranchDto });
  }

  findAll() {
    return this.prisma.branch.findMany();
  }

  findOne(id: number) {
    return this.prisma.branch.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });
  }

  update(id: number, updateBranchDto: UpdateBranchDto) {
    return this.prisma.branch.update({
      where: { id },
      data: updateBranchDto,
    });
  }

  remove(id: number) {
    return this.prisma.branch.delete({ where: { id } });
  }
}
