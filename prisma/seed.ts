import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  const user1 = await prisma.user.upsert({
    where: { email: 'admin@admin.admin' },
    update: {},
    create: {
      email: 'admin@admin.admin',
      name: 'Admin ADMIN',
      password: 'adminadminadmin',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'User@User.User' },
    update: {},
    create: {
      email: 'User@User.User',
      name: 'User USER',
      password: 'useruseruser',
    },
  });

  const post1 = await prisma.branch.upsert({
    where: { title: 'Facebook' },
    update: {      authorId: user1.id,
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
