-- AlterTable
ALTER TABLE "followers" ALTER COLUMN "followerId" DROP NOT NULL,
ALTER COLUMN "followingId" DROP NOT NULL;
