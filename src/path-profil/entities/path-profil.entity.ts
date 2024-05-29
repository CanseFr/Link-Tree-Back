import { PathProfil } from '@prisma/client';

export class PathProfilEntity implements PathProfil {
  createdAt: Date;
  id: number;
  updatedAt: Date;
  url_owner: string;
  userId: number;
}
