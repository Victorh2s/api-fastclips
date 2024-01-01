import { OrmClipsRepository } from '@/repositories/orm/orm-clips';
import { DeleteSavedClipUseCase } from '@/use-cases/clips-use-case/delete-saved-clip';
import { type Request, type Response } from 'express';

export async function DeleteSavedClipController (req: Request, res: Response) {
  const { clipid } = req.params;
  try {
    const ormClipsRepository = new OrmClipsRepository();
    const deleteSavedClipUseCase = new DeleteSavedClipUseCase(ormClipsRepository);
    await deleteSavedClipUseCase.execute({ clipid });

    return res.json('Clip deleted').status(200);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    });
  }
}
