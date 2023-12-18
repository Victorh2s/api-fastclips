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

export class GetClipsUseCase {
  constructor (private readonly ormStreamerRepository: IntStreamerRepository) {}

  async execute () {
    const streamers = await this.ormStreamerRepository.GetStreamers({});
    const clips: IntClipsResponse[] = [];

    const promises = streamers.map(async (item) => {
      const response = await api.get(
              `clips?broadcaster_id=${item.broadcaster_id}`,
              {
                headers: {
                  'Client-ID': process.env.CLIENT_ID,
                  Authorization: `Bearer ${process.env.TOKEN}`
                }
              }
      );
      const broadcasterName = item.broadcaster_name;
      const res: IntClipsResponse = {
        streamer: broadcasterName,
        data: response.data.data

      };

      clips.push(res);
    });

    await Promise.all(promises);

    return clips;
  }
}
