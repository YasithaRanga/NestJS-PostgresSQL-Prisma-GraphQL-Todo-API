/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Toilet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_toiletId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_toiletId_fkey";

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "Review";

-- DropTable
DROP TABLE "Toilet";
