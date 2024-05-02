import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BranchsModule } from './branchs/branchs.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, BranchsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
