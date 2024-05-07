/*
  Warnings:

  - You are about to drop the `Branch_Network` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Path_Profil` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Branch_Network` DROP FOREIGN KEY `Branch_Network_pathId_fkey`;

-- DropForeignKey
ALTER TABLE `Path_Profil` DROP FOREIGN KEY `Path_Profil_userId_fkey`;

-- DropTable
DROP TABLE `Branch_Network`;

-- DropTable
DROP TABLE `Path_Profil`;

-- CreateTable
CREATE TABLE `BranchNetwork` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_network` VARCHAR(191) NOT NULL,
    `url_network` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `pathId` INTEGER NOT NULL,

    UNIQUE INDEX `BranchNetwork_name_network_key`(`name_network`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PathProfil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url_owner` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `PathProfil_url_owner_key`(`url_owner`),
    UNIQUE INDEX `PathProfil_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BranchNetwork` ADD CONSTRAINT `BranchNetwork_pathId_fkey` FOREIGN KEY (`pathId`) REFERENCES `PathProfil`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PathProfil` ADD CONSTRAINT `PathProfil_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
