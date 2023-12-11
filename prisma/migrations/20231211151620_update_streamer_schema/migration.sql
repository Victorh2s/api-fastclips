/*
  Warnings:

  - You are about to drop the column `broadcaster_language` on the `Streamer` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Streamer` table. All the data in the column will be lost.
  - You are about to drop the column `followers` on the `Streamer` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Streamer` table. All the data in the column will be lost.
  - Added the required column `broadcaster_type` to the `Streamer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `Streamer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Streamer" DROP COLUMN "broadcaster_language",
DROP COLUMN "description",
DROP COLUMN "followers",
DROP COLUMN "title",
ADD COLUMN     "broadcaster_type" TEXT NOT NULL,
ADD COLUMN     "created_at" TEXT NOT NULL;
