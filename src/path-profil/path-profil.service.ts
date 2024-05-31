import { Injectable } from '@nestjs/common';
// import { CreatePathProfilDto } from './dto/create-path-profil.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdatePathProfilDto } from './dto/update-path-profil.dto';
import { BranchNetworkService } from '../branch-network/branch-network.service';
// import { UpdatePathProfilDto } from './dto/update-path-profil.dto';

@Injectable()
export class PathProfilService {
  constructor(
    private prisma: PrismaService,
    private beanchService: BranchNetworkService,
  ) {}

  // create(createPathProfilDto: CreatePathProfilDto) {
  //   return this.prisma.pathProfil.create({ data: createPathProfilDto });
  // }

  // findAll() {
  //   return this.prisma.pathProfil.findMany();
  // }
  //
  // findOne(id: number) {
  //   return this.prisma.pathProfil.findUnique({ where: { id } });
  // }

  update(id: number, updatePathProfilDto: UpdatePathProfilDto) {
    return updatePathProfilDto.branchs.map((b, index) =>
      this.beanchService.update(b.id, updatePathProfilDto.branchs[index]),
    );
  }

  // remove(id: number) {
  //   return `This action removes a #${id} pathProfil`;
  // }

  findCompletBranchByUserId(id: number) {
    return this.prisma.pathProfil.findUnique({
      where: { userId: id },
      include: { branchs: true },
    });
  }

  findCompletBranchByUserPath(url_owner: string) {
    return this.prisma.pathProfil.findUnique({
      where: { url_owner: url_owner },
      include: { branchs: true },
    });
  }
}
