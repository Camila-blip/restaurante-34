/*
  Warnings:

  - You are about to drop the column `dataNascimento` on the `Cliente` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "dataNascimento",
ADD COLUMN     "data" TIMESTAMP(3);
