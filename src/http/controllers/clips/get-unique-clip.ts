import { OrmStreamerRepository } from '@/repositories/orm/orm-streamer';
import { GetUniqueClipUseCase } from '@/use-cases/clips-use-case/get-unique-clip';
import { type Request, type Response } from 'express';

export async function GetUniqueClipController (req: Request, res: Response) {
  const { clipid } = req.params;

  try {
    const ormStreamerRepository = new OrmStreamerRepository();
    const getUniqueClipUseCase = new GetUniqueClipUseCase(ormStreamerRepository);
    const data = await getUniqueClipUseCase.execute({ clipid });

    return res.json(data[0]).status(200);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    });
  }
}
