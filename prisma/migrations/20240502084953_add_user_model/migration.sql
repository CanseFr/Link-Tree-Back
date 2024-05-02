/*
  Warnings:

  - You are about to drop the column `userId` on the `Branch` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Branch` DROP FOREIGN KEY `Branch_userId_fkey`;

-- AlterTable
ALTER TABLE `Branch` DROP COLUMN `userId`,
    ADD COLUMN `authorId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Branch` ADD CONSTRAINT `Branch_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
