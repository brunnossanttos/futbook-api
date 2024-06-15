-- AlterTable
ALTER TABLE "users" ALTER COLUMN "birthDate" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "avatar_headers" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    "pickupSoccerId" TEXT,
    "avatarUrl" TEXT,
    "headerUrl" TEXT,

    CONSTRAINT "avatar_headers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "avatar_headers" ADD CONSTRAINT "avatar_headers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avatar_headers" ADD CONSTRAINT "avatar_headers_pickupSoccerId_fkey" FOREIGN KEY ("pickupSoccerId") REFERENCES "pickup_soccers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
