-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "epub" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Media" ADD COLUMN     "metadata" JSONB;
