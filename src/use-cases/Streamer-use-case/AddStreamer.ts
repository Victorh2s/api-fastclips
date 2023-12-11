import { getChannels } from '@/utils/axios';
import { PrismaClient } from '@prisma/client';

export interface IntAddStreamerUseCase {
  loginName: string
}

const prisma = new PrismaClient();

export class AddStreamerUseCase {
  async execute ({
    loginName
  }: IntAddStreamerUseCase) {
    const resChannel = await getChannels(loginName);

    const verifyIfExistingChannel = await prisma.streamer.findUnique({
      where: { broadcaster_id: resChannel.data[0].id }
    });

    if (verifyIfExistingChannel) {
      throw new Error('Streamer already existing!');
    }

    const addStreamer = await prisma.streamer.create({
      data: {
        broadcaster_id: resChannel.data[0].id,
        broadcaster_name: resChannel.data[0].login,
        display_name: resChannel.data[0].display_name,
        type: resChannel.data[0].type,
        avatar: resChannel.data[0].profile_image_url,
        broadcaster_type: resChannel.data[0].broadcaster_type,
        viewCount: resChannel.data[0].view_count,
        created_at: resChannel.data[0].created_at,
        star: false
      }
    });

    return addStreamer;
  }
}
