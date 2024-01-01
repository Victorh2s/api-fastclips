import { OrmClipsRepository } from '@/repositories/orm/orm-clips';
import { GetSavedClipsUseCase } from '@/use-cases/clips-use-case/get-saved-clips';
import { type Request, type Response } from 'express';

export async function GetSavedClipsController (req: Request, res: Response) {
  try {
    const ormClipsRepository = new OrmClipsRepository();
    const getSavedClipsUseCase = new GetSavedClipsUseCase(ormClipsRepository);
    const data = await getSavedClipsUseCase.execute();

    return res.json(data).status(200);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    });
  }
}
