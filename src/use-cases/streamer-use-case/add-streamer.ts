import { type IntStreamerRepository } from '@/repositories/orm/interfaces/interface-streamer';
import { getChannels } from '@/utils/axios';

export interface IntAddStreamerUseCase {
  loginName: string
}

export class AddStreamerUseCase {
  constructor (private readonly ormStreamerRepository: IntStreamerRepository) {}

  async execute ({
    loginName
  }: IntAddStreamerUseCase) {
    const resChannel = await getChannels(loginName);

    const verifyIfExistingChannel = await this.ormStreamerRepository.findUniqueBroadcasterID(resChannel.data[0].id);

    if (verifyIfExistingChannel) {
      throw new Error('Streamer already existing in database!');
    }

    const addStreamer = await this.ormStreamerRepository.Create({
      broadcasterID: resChannel.data[0].id,
      broadcasterName: resChannel.data[0].login,
      displayName: resChannel.data[0].display_name,
      broadcasterType: resChannel.data[0].broadcaster_type,
      type: resChannel.data[0].type,
      viewCount: resChannel.data[0].view_count,
      avatar: resChannel.data[0].profile_image_url,
      star: false,
      createdAt: resChannel.data[0].created_at
    });

    return addStreamer;
  }
}
