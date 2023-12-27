import { OrmStreamerRepository } from '@/repositories/orm/orm-streamer';
import { GetClipsByStreamer } from '@/use-cases/clips-use-case/get-clip-by-streamer';
import { type Request, type Response } from 'express';

export async function GetClipByStreamer (req: Request, res: Response) {
  try {
    const ormStreamerRepository = new OrmStreamerRepository();
    const getClipByStreamer = new GetClipsByStreamer(ormStreamerRepository);
    const data = await getClipByStreamer.execute();

    return res.json(data).status(200);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    });
  }
}
