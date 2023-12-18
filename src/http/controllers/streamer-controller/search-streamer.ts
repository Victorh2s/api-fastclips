import { SearchStreamerUseCase } from '@/use-cases/streamer-use-case/search-streamer';
import { type Request, type Response } from 'express';

export async function SearchStreamerController (req: Request, res: Response) {
  const { channelName } = req.body;
  const loginName = String(channelName).toLowerCase();
  try {
    const searchStreamerUseCase = new SearchStreamerUseCase();
    const data = await searchStreamerUseCase.execute({ loginName });

    return res.json(data).status(200);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    });
  }
}
