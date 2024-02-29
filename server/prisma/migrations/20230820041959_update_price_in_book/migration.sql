/*
  Warnings:

  - You are about to drop the column `price` on the `Book` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[priceId]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `priceId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "price",
ADD COLUMN     "priceId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Book_priceId_key" ON "Book"("priceId");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
