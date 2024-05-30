import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreatePathProfilDto {
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
}
