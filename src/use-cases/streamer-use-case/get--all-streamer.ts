import { type IntStreamerRepository } from '@/repositories/orm/interfaces/interface-streamer';

export interface IntGetAllStreamerUseCase {
  broadcasterName?: string
  skip?: number
  pageSize?: number
}

export class GetAllStreamerUseCase {
  constructor (private readonly ormStreamerRepository: IntStreamerRepository) {}

  async execute ({ broadcasterName, skip, pageSize }: IntGetAllStreamerUseCase) {
    const streamers = await this.ormStreamerRepository.GetStreamers({ broadcasterName, pageSize, skip });

    return streamers;
  }
}
