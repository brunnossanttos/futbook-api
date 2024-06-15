-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "shirtNumber" TEXT,
    "cellphone" TEXT,
    "googleId" TEXT,
    "appleId" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pickup_soccers" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "pickup_soccers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPickupSoccer" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "pickupSoccerId" TEXT NOT NULL,

    CONSTRAINT "UserPickupSoccer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_nickname_key" ON "users"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "UserPickupSoccer" ADD CONSTRAINT "UserPickupSoccer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPickupSoccer" ADD CONSTRAINT "UserPickupSoccer_pickupSoccerId_fkey" FOREIGN KEY ("pickupSoccerId") REFERENCES "pickup_soccers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
