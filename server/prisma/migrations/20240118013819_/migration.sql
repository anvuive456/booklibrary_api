/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Book` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_categoryId_fkey";

-- DropIndex
DROP INDEX "Book_categoryId_key";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "categoryId";

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "addressId" INTEGER;

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BookToCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BookToCategory_AB_unique" ON "_BookToCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_BookToCategory_B_index" ON "_BookToCategory"("B");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToCategory" ADD CONSTRAINT "_BookToCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToCategory" ADD CONSTRAINT "_BookToCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
