import { searchChannel } from '@/utils/axios';
import { type Request, type Response } from 'express';

export async function SearchStreamer (req: Request, res: Response) {
  const { channelName } = req.body;
  const loginName = String(channelName).toLowerCase();
  try {
    const resChannel = await searchChannel(loginName);

    return res.json(resChannel.data).status(200);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    });
  }
}
