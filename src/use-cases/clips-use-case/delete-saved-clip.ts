import { type IntClipsRepository } from '@/repositories/orm/interfaces/interface-clips';

interface IntDeleteSavedClipUseCase {
  clipid: string
}

export class DeleteSavedClipUseCase {
  constructor (private readonly ormClipsRepository: IntClipsRepository) {}

  async execute ({ clipid }: IntDeleteSavedClipUseCase) {
    await this.ormClipsRepository.FindClipByID(clipid);

    await this.ormClipsRepository.DeleteClip(clipid);

    return;
  }
}
