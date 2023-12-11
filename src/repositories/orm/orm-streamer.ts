import { PrismaClient } from '@prisma/client';
import { type IntAddStreamer } from './interface-streamer';

const prisma = new PrismaClient();

export class OrmStreamerRepository {
  async findUniqueBroadcasterID (broadcasterID: string) {
    const verifyIfExistingChannel = await prisma.streamer.findUnique({
      where: { broadcaster_id: broadcasterID }
    });

    return verifyIfExistingChannel;
  }

  async Create ({ broadcasterID, broadcasterName, displayName, type, avatar, broadcasterType, viewCount, createdAt, star }: IntAddStreamer) {
    const addStreamer = await prisma.streamer.create({
      data: {
        broadcaster_id: broadcasterID,
        broadcaster_name: broadcasterName,
        display_name: displayName,
        type,
        avatar,
        broadcaster_type: broadcasterType,
        viewCount,
        created_at: createdAt,
        star: star ?? false
      }
    });
    return addStreamer;
  }

  async Delete (broadcasterID: string) {
    await prisma.streamer.delete({
      where: {
        broadcaster_id: broadcasterID
      }
    });
  }
}
