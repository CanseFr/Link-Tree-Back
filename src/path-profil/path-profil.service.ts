import { Injectable } from '@nestjs/common';
// import { CreatePathProfilDto } from './dto/create-path-profil.dto';
import { UpdatePathProfilDto } from './dto/update-path-profil.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PathProfilService {
  constructor(private prisma: PrismaService) {}

  // create(createPathProfilDto: CreatePathProfilDto) {
  //   return this.prisma.pathProfil.create({ data: createPathProfilDto });
  // }

  findAll() {
    return this.prisma.pathProfil.findMany();
  }

  findOne(id: number) {
    return this.prisma.pathProfil.findUnique({ where: { id } });
  }

  update(id: number, updatePathProfilDto: UpdatePathProfilDto) {
    return `This action updates a #${id} pathProfil`;
  }

  remove(id: number) {
    return `This action removes a #${id} pathProfil`;
  }

  findCompletBranchByUserId(id: number) {
    return this.prisma.pathProfil.findUnique({
      where: { id },
      include: { branchs: true },
    });
  }
}