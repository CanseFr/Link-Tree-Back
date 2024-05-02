import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  email: string;
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string | null;
  @ApiProperty()
  updatedAt: Date;
  @Exclude()
  password: string;
}
