import { OrmStreamerRepository } from '@/repositories/orm/orm-streamer';
import { DeleteStreamerUseCase } from '@/use-cases/streamer-use-case/delete-streamer';
import { type Request, type Response } from 'express';

export async function DeleteStreamerController (req: Request, res: Response) {
  const { broadcasterid } = req.params;
  try {
    const ormStreamerRepository = new OrmStreamerRepository();
    const deleteStreamerUseCase = new DeleteStreamerUseCase(ormStreamerRepository);
    const data = await deleteStreamerUseCase.execute({ broadcasterID: broadcasterid });

    return res.json(data).status(200);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    });
  }
}
