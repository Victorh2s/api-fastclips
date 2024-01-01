import { OrmStreamerRepository } from '@/repositories/orm/orm-streamer';
import { GetAllStreamerUseCase } from '@/use-cases/streamer-use-case/get-all-streamer';
import { type Request, type Response } from 'express';

export async function GetAllStreamerController (req: Request, res: Response) {
  const { broadcastername } = req.query;
  const querys = {
    broadcasterName: broadcastername ? String(broadcastername) : ''
  };
  try {
    const ormStreamerRepository = new OrmStreamerRepository();
    const getAllStreamerUseCase = new GetAllStreamerUseCase(ormStreamerRepository);
    const data = await getAllStreamerUseCase.execute({ broadcasterName: querys.broadcasterName });

    return res.json(data).status(200);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    });
  }
}
