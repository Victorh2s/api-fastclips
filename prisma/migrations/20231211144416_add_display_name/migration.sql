/*
  Warnings:

  - Added the required column `display_name` to the `Streamer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Streamer" ADD COLUMN     "display_name" TEXT NOT NULL;
