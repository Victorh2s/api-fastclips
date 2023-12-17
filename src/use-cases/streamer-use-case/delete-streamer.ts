import { type IntStreamerRepository } from '@/repositories/orm/interfaces/interface-streamer';

export interface IntDeleteStreamerUseCase {
  broadcasterID: string
}

export class DeleteStreamerUseCase {
  constructor (private readonly ormStreamerRepository: IntStreamerRepository) {}

  async execute ({
    broadcasterID
  }: IntDeleteStreamerUseCase) {
    const verifyIfExistingChannel = await this.ormStreamerRepository.findUniqueBroadcasterID(broadcasterID);

    if (!verifyIfExistingChannel) {
      throw new Error('Streamer not found in DataBase!');
    }

    await this.ormStreamerRepository.Delete(broadcasterID);

    return 'Streamer Deleted';
  }
}
