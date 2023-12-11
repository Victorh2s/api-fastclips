import { AddStreamerUseCase } from '@/use-cases/streamer-use-case/add-streamer';
import { type Request, type Response } from 'express';

export async function AddStreamerController (req: Request, res: Response) {
  const { channelName } = req.body;
  const loginName = String(channelName).toLowerCase();
  try {
    const addStreamerUseCase = new AddStreamerUseCase();
    const data = await addStreamerUseCase.execute({ loginName });

    return res.json(data).status(200);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    });
  }
}
