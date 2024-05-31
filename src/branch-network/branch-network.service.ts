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

  async update(id: number, updateBranchNetworkDto: UpdateBranchNetworkDto) {
    return this.prisma.branchNetwork.update({
      where: { id },
      data: { name_network: updateBranchNetworkDto.name_network },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} branchNetwork`;
  }
}
