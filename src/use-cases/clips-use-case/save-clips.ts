import { type IntClipsRepository } from '@/repositories/orm/interfaces/interface-clips';

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

interface IntClipsResponse {
  streamer: string
  data: IntCLip[]
}

export class SaveClipsUseCase {
  constructor (private readonly ormClipsRepository: IntClipsRepository) {}

  async execute (clip: IntClipsResponse) {
    await this.ormClipsRepository.SaveClip(clip.data[0]);
    return;
  }
}
