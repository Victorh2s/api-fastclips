-- CreateTable
CREATE TABLE "Streamer" (
    "id" TEXT NOT NULL,
    "broadcaster_id" TEXT NOT NULL,
    "broadcaster_name" TEXT NOT NULL,
    "broadcaster_language" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "followers" INTEGER NOT NULL,
    "viewCount" INTEGER NOT NULL,
    "star" BOOLEAN NOT NULL,

    CONSTRAINT "Streamer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clips" (
    "id" TEXT NOT NULL,
    "clip_id" TEXT NOT NULL,
    "broadcaster_name" TEXT NOT NULL,
    "creator_id" TEXT NOT NULL,
    "creator_name" TEXT NOT NULL,
    "clip_url" TEXT NOT NULL,
    "embed_url" TEXT NOT NULL,
    "thumbnail_url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "view_count" INTEGER NOT NULL,
    "duration" DOUBLE PRECISION NOT NULL,
    "is_featured" BOOLEAN NOT NULL,
    "game_id" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "broadcaster_id" TEXT NOT NULL,

    CONSTRAINT "Clips_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Streamer_broadcaster_id_key" ON "Streamer"("broadcaster_id");

-- CreateIndex
CREATE UNIQUE INDEX "Clips_clip_id_key" ON "Clips"("clip_id");

-- CreateIndex
CREATE UNIQUE INDEX "Clips_creator_id_key" ON "Clips"("creator_id");

-- CreateIndex
CREATE UNIQUE INDEX "Clips_broadcaster_id_key" ON "Clips"("broadcaster_id");

-- AddForeignKey
ALTER TABLE "Clips" ADD CONSTRAINT "Clips_broadcaster_id_fkey" FOREIGN KEY ("broadcaster_id") REFERENCES "Streamer"("broadcaster_id") ON DELETE RESTRICT ON UPDATE CASCADE;
