import { Injectable } from '@nestjs/common';
import { CreateBranchNetworkDto } from './dto/create-branch-network.dto';
import { UpdateBranchNetworkDto } from './dto/update-branch-network.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BranchNetworkService {
  constructor(private prisma: PrismaService) {}

  create(createBranchNetworkDto: CreateBranchNetworkDto) {
    return 'This action adds a new branchNetwork' + createBranchNetworkDto;
  }

  findAll() {
    return this.prisma.branchNetwork.findMany();
  }

  findOne(id: number) {
    return this.prisma.branchNetwork.findUnique({ where: { id } });
  }

  update(id: number, updateBranchNetworkDto: UpdateBranchNetworkDto) {
    return (
      `This action updates a #${id} branchNetwork` + updateBranchNetworkDto
    );
  }

  remove(id: number) {
    return `This action removes a #${id} branchNetwork`;
  }
}
