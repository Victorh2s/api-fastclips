import { OrmStreamerRepository } from '@/repositories/orm/orm-streamer';
import { GetClipsUseCase } from '@/use-cases/clips-use-case/get-clips';
import { type Request, type Response } from 'express';

export async function GetClipsController (req: Request, res: Response) {
  try {
    const { time, count } = req.body;

    if (count > 100) throw new Error('The count must be at most 100');

    const ormStreamerRepository = new OrmStreamerRepository();
    const getClipsUseCase = new GetClipsUseCase(ormStreamerRepository);
    const data = await getClipsUseCase.execute({ time, count });

    return res.json(data).status(200);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    });
  }
}
