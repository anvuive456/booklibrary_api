/*
  Warnings:

  - A unique constraint covering the columns `[mediaId]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mediaId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mediaId` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mediaId` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rentDate` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `returnDate` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "mediaId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "mediaId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "rentDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "returnDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Media" (
    "id" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "blurhash" TEXT NOT NULL,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_mediaId_key" ON "Book"("mediaId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_mediaId_key" ON "Profile"("mediaId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
