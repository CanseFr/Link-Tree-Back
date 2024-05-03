import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const roundsOfHashing = 10;

async function main() {
  const passwordAdmin = await bcrypt.hash('adminadminadmin', roundsOfHashing);
  const passwordUser = await bcrypt.hash('useruseruser', roundsOfHashing);

  const user1 = await prisma.user.upsert({
    where: { email: 'admin@admin.admin' },
    update: {
      password: passwordAdmin,
    },
    create: {
      firstname: 'Admin',
      lastname: 'ADMINLAST',
      role: 'ADMIN',
      email: 'admin@admin.admin',
      password: passwordAdmin,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'User@User.User' },
    update: {
      password: passwordUser,
    },
    create: {
      firstname: 'User',
      lastname: 'USERLAST',
      role: 'USER',
      email: 'User@User.User',
      password: passwordUser,
    },
  });

  const post1 = await prisma.branch.upsert({
    where: { title: 'Facebook' },
    update: {
      authorId: user1.id,
    },
    create: {
      title: 'Facebook',
      description: 'Lien Facebook',
      authorId: user1.id,
    },
  });

  const post2 = await prisma.branch.upsert({
    where: { title: 'Instagram' },
    update: {
      authorId: user2.id,
    },
    create: {
      title: 'Instagram',
      description: 'Line insta Http',
      authorId: user2.id,
    },
  });

  console.log({ post1, post2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
