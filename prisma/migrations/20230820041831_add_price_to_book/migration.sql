-- CreateEnum
CREATE TYPE "PriceUnit" AS ENUM ('VND', 'USD', 'EURO');

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "price" DECIMAL(65,30) NOT NULL DEFAULT 0.0;

-- CreateTable
CREATE TABLE "Price" (
    "id" TEXT NOT NULL,
    "value" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
    "unit" "PriceUnit" NOT NULL DEFAULT 'VND',

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);
