import { Module } from '@nestjs/common';
import { PathProfilService } from './path-profil.service';
import { PathProfilController } from './path-profil.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [PathProfilController],
  providers: [PathProfilService],
  imports: [PrismaModule],

})
export class PathProfilModule {}
