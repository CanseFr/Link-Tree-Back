import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.article.upsert({
    where: { title: 'Facebook' },
    update: {},
    create: {
      title: 'Facebook',
      description: 'Lien Facebook',
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: 'Instagram' },
    update: {},
    create: {
      title: 'Instagram',
      description: 'Line insta Http',
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
