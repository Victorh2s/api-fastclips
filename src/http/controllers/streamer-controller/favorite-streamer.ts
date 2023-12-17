import { OrmStreamerRepository } from '@/repositories/orm/orm-streamer';
import { FavoriteStreamerUseCase } from '@/use-cases/streamer-use-case/favorite-streamer';
import { type Request, type Response } from 'express';

export async function FavoriteStreamerController (req: Request, res: Response) {
  const { broadcasterid } = req.params;

  try {
    const ormStreamerRepository = new OrmStreamerRepository();
    const favoriteStreamerUseCase = new FavoriteStreamerUseCase(ormStreamerRepository);
    const data = await favoriteStreamerUseCase.execute({ broadcasterID: broadcasterid });

    return res.json(data).status(200);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    });
  }
}
