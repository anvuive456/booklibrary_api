/*
  Warnings:

  - Added the required column `imageH` to the `Media` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageW` to the `Media` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Media" ADD COLUMN     "imageH" INTEGER NOT NULL,
ADD COLUMN     "imageW" INTEGER NOT NULL;
