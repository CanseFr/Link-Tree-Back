import { Branch } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../../users/entities/user.entity';

export class BranchEntity implements Branch {
  @ApiProperty()
  id: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  description: string | null;
  @ApiProperty()
  title: string;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty({ required: false, nullable: true })
  authorId: number | null;
  @ApiProperty({ required: false, type: UserEntity })
  author?: UserEntity;

  constructor({ author, ...data }: Partial<BranchEntity>) {
    Object.assign(this, data);

    if (author) {
      this.author = new UserEntity(author);
    }
  }
}
