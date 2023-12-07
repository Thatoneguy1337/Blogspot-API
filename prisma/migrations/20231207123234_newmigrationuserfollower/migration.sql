/*
  Warnings:

  - You are about to drop the column `followerId` on the `follow` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "follow" DROP CONSTRAINT "follow_followerId_fkey";

-- AlterTable
ALTER TABLE "follow" DROP COLUMN "followerId",
ADD COLUMN     "user_id" INTEGER;

-- AddForeignKey
ALTER TABLE "follow" ADD CONSTRAINT "follow_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
