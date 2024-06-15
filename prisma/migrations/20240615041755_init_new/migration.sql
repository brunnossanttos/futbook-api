/*
  Warnings:

  - A unique constraint covering the columns `[createdBy]` on the table `pickup_soccers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `field` to the `pickup_soccers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pickup_soccers" ADD COLUMN     "field" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "birthDate" TIMESTAMP(3),
ADD COLUMN     "position" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "pickup_soccers_createdBy_key" ON "pickup_soccers"("createdBy");

-- AddForeignKey
ALTER TABLE "pickup_soccers" ADD CONSTRAINT "pickup_soccers_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
