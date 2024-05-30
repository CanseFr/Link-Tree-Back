import { PathProfil } from '@prisma/client';

export class PathProfilEntity implements PathProfil {
  createdAt: Date;
  id: number;
  updatedAt: Date;
  url_owner: string;
  bgColor: string;
  bio: string;
  userId: number;
}
