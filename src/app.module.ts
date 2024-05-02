import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BranchsModule } from './branchs/branchs.module';

@Module({
  imports: [PrismaModule, BranchsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
