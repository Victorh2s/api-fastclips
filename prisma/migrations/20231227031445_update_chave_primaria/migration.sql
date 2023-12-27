/*
  Warnings:

  - The primary key for the `Clips` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `broadcaster_id` on the `Clips` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Clips` table. All the data in the column will be lost.
  - The primary key for the `Streamer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Streamer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[broadcasterid]` on the table `Clips` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `broadcasterid` to the `Clips` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Clips" DROP CONSTRAINT "Clips_broadcaster_id_fkey";

-- DropIndex
DROP INDEX "Clips_broadcaster_id_key";

-- DropIndex
DROP INDEX "Clips_creator_id_key";

-- AlterTable
ALTER TABLE "Clips" DROP CONSTRAINT "Clips_pkey",
DROP COLUMN "broadcaster_id",
DROP COLUMN "id",
ADD COLUMN     "broadcasterid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Streamer" DROP CONSTRAINT "Streamer_pkey",
DROP COLUMN "id";

-- CreateIndex
CREATE UNIQUE INDEX "Clips_broadcasterid_key" ON "Clips"("broadcasterid");

-- AddForeignKey
ALTER TABLE "Clips" ADD CONSTRAINT "Clips_broadcasterid_fkey" FOREIGN KEY ("broadcasterid") REFERENCES "Streamer"("broadcaster_id") ON DELETE RESTRICT ON UPDATE CASCADE;
