import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { BranchNetworkEntity } from '../../branch-network/entities/branch-network.entity';

export class CreatePathProfilDto {
  @ApiProperty()
  id: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  url_owner: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  bgColor: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  bio: string;

  @IsArray()
  @ApiProperty()
  branchs: BranchNetworkEntity[];
}
