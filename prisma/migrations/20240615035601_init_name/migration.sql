/*
  Warnings:

  - You are about to drop the `UserPickupSoccer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserPickupSoccer" DROP CONSTRAINT "UserPickupSoccer_pickupSoccerId_fkey";

-- DropForeignKey
ALTER TABLE "UserPickupSoccer" DROP CONSTRAINT "UserPickupSoccer_userId_fkey";

-- DropTable
DROP TABLE "UserPickupSoccer";

-- CreateTable
CREATE TABLE "users_pickup_soccer" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "pickupSoccerId" TEXT NOT NULL,

    CONSTRAINT "users_pickup_soccer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users_pickup_soccer" ADD CONSTRAINT "users_pickup_soccer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_pickup_soccer" ADD CONSTRAINT "users_pickup_soccer_pickupSoccerId_fkey" FOREIGN KEY ("pickupSoccerId") REFERENCES "pickup_soccers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
