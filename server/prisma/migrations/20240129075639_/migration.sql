-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_mediaId_fkey";

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "mediaId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
