import { type IntStreamerRepository } from '@/repositories/orm/interfaces/interface-streamer';

export interface IntDeleteStreamerUseCase {
  broadcasterID: string
}

export class FavoriteStreamerUseCase {
  constructor (private readonly ormStreamerRepository: IntStreamerRepository) {}

  async execute ({
    broadcasterID
  }: IntDeleteStreamerUseCase) {
    const verifyIfExistingChannel = await this.ormStreamerRepository.findUniqueBroadcasterID(broadcasterID);

    if (!verifyIfExistingChannel) {
      throw new Error('Streamer not found in DataBase!');
    }

    const { star } = verifyIfExistingChannel;

    await this.ormStreamerRepository.Favorite(broadcasterID, !star);

    return 'Streamer Favorited';
  }
}
