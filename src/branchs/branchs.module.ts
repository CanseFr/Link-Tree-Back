import { Module } from '@nestjs/common';
import { BranchsService } from './branchs.service';
import { BranchsController } from './branchs.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  controllers: [BranchsController],
  providers: [BranchsService],
  imports: [PrismaModule],
})
export class BranchsModule {}
