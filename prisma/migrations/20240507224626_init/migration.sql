/*
  Warnings:

  - You are about to drop the `Branch` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Path` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Branch` DROP FOREIGN KEY `Branch_pathId_fkey`;

-- DropForeignKey
ALTER TABLE `Path` DROP FOREIGN KEY `Path_userId_fkey`;

-- DropTable
DROP TABLE `Branch`;

-- DropTable
DROP TABLE `Path`;

-- CreateTable
CREATE TABLE `Branch_Network` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_network` VARCHAR(191) NOT NULL,
    `url_network` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `pathId` INTEGER NOT NULL,

    UNIQUE INDEX `Branch_Network_name_network_key`(`name_network`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Path_Profil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url_owner` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Path_Profil_url_owner_key`(`url_owner`),
    UNIQUE INDEX `Path_Profil_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Branch_Network` ADD CONSTRAINT `Branch_Network_pathId_fkey` FOREIGN KEY (`pathId`) REFERENCES `Path_Profil`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Path_Profil` ADD CONSTRAINT `Path_Profil_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
