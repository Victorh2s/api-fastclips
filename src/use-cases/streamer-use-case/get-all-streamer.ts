import { type IntStreamerRepository } from '@/repositories/orm/interfaces/interface-streamer';

export interface IntGetAllStreamerUseCase {
  broadcasterName: string
}

export class GetAllStreamerUseCase {
  constructor (private readonly ormStreamerRepository: IntStreamerRepository) {}

  async execute ({ broadcasterName }: IntGetAllStreamerUseCase) {
    const streamers = await this.ormStreamerRepository.GetStreamers({ broadcasterName });

    return streamers;
  }
}
