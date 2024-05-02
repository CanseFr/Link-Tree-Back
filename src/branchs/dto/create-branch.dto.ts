import { ApiProperty } from '@nestjs/swagger';

export class CreateBranchDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description?: string;
}
