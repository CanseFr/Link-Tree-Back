import { Branch } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class BranchEntity implements Branch{
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
}
