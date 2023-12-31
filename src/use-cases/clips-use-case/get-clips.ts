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
interface IntGetClipsUseCase {
  time: number | null
  count: number | null
}

export class GetClipsUseCase {
  constructor (private readonly ormStreamerRepository: IntStreamerRepository) {}

  async execute ({ time, count }: IntGetClipsUseCase) {
    const streamers = await this.ormStreamerRepository.GetStreamers({});
    const clips: IntClipsResponse[] = [];

    const now = new Date();
    const getTime = time ? new Date(now.getTime() - 24 * 60 * 60 * (time * 1000)) : new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const formattedDate = getTime.toISOString();

    const promises = streamers.map(async (item) => {
      const response = await api.get(
              `clips?broadcaster_id=${item.broadcaster_id}&started_at=${formattedDate}${count ? `&first=${count}` : '&first=20'}`,
              {
                headers: {
                  'Client-ID': process.env.CLIENT_ID,
                  Authorization: `Bearer ${process.env.TOKEN}`
                }
              }
      );
      const broadcasterName = item.display_name;
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
