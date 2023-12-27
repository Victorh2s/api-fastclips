import { type IntStreamerRepository } from '@/repositories/orm/interfaces/interface-streamer';
import { api } from '@/utils/axios';

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

interface IntGetUniqueClipUseCase {
  clipid: string
}

export class GetUniqueClipUseCase {
  constructor (private readonly ormStreamerRepository: IntStreamerRepository) {}

  async execute ({ clipid }: IntGetUniqueClipUseCase) {
    const clips: IntClipsResponse[] = [];

    const response = await api.get(
              `clips?id=${clipid}`,
              {
                headers: {
                  'Client-ID': process.env.CLIENT_ID,
                  Authorization: `Bearer ${process.env.TOKEN}`
                }
              }
    );
    const broadcasterName = response.data.data[0].broadcaster_name;
    const res: IntClipsResponse = {
      streamer: broadcasterName,
      data: response.data.data

    };

    clips.push(res);

    return clips;
  }
}
