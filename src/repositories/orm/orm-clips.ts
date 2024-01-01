import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface IntCLip {
  id: string
  url: string
  embed_url: string
  broadcaster_id: string
  broadcaster_name: string
  creator_id: string
  creator_name: string
  video_id: string
  game_id: string
  language: string
  title: string
  view_count: number
  created_at: string
  thumbnail_url: string
  duration: number
  vod_offset: null | number
  is_featured: boolean
}

export class OrmClipsRepository {
  async SaveClip (data: IntCLip) {
    console.log(data);
    await prisma.clips.create({
      data: {
        broadcasterid: data.broadcaster_id,
        broadcaster_name: data.broadcaster_name,
        clip_id: data.id,
        title: data.title,
        embed_url: data.embed_url,
        clip_url: data.url,
        thumbnail_url: data.thumbnail_url,
        game_id: data.game_id,
        created_at: data.created_at,
        creator_name: data.creator_name,
        creator_id: data.creator_id,
        duration: data.duration,
        is_featured: data.is_featured,
        view_count: data.view_count
      }
    });
    return;
  }

  async FindClipByID (clipID: string) {
    const clip = await prisma.clips.findUnique({
      where: {
        clip_id: clipID
      }
    });

    if (!clip) {
      throw new Error('Clip not found');
    }
    return clip;
  }

  async DeleteClip (clipID: string) {
    await prisma.clips.delete({
      where: {
        clip_id: clipID
      }
    });
    return;
  }

  async GetClips () {
    const clips = await prisma.clips.findMany({});
    return clips;
  }
}
