import { type IntClipsRepository } from '@/repositories/orm/interfaces/interface-clips';

export class GetSavedClipsUseCase {
  constructor (private readonly ormClipsRepository: IntClipsRepository) {}

  async execute () {
    const clips = await this.ormClipsRepository.GetClips();

    return clips;
  }
}
