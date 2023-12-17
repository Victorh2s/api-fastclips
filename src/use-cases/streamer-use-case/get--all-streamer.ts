import { type IntStreamerRepository } from '@/repositories/orm/interfaces/interface-streamer';
import { PrismaClient } from '@prisma/client';

interface IntGetAllStreamerUseCase {
  broadcasterName: string | undefined
  skip: number | undefined
  pageSize: number | undefined
}

const prisma = new PrismaClient();

export class GetAllStreamerUseCase {
  constructor (private readonly ormStreamerRepository: IntStreamerRepository) {}

  async execute ({ broadcasterName, skip, pageSize }: IntGetAllStreamerUseCase) {
    const getStreamers = skip && pageSize
      ? await prisma.streamer.findMany({
        where: {
          broadcaster_name: broadcasterName ? { contains: broadcasterName } : undefined
        },
        skip,
        take: pageSize
      })
      : await prisma.streamer.findMany({
        where: {
          broadcaster_name: broadcasterName ? { contains: broadcasterName } : undefined
        }

      });

    return getStreamers;
  }
}
