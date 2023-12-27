import { OrmClipsRepository } from '@/repositories/orm/orm-clips';
import { OrmStreamerRepository } from '@/repositories/orm/orm-streamer';
import { GetUniqueClipUseCase } from '@/use-cases/clips-use-case/get-unique-clip';
import { SaveClipsUseCase } from '@/use-cases/clips-use-case/save-clips';
import { type Request, type Response } from 'express';

export async function SaveClipsController (req: Request, res: Response) {
  const { clipid } = req.params;

  try {
    const ormStreamerRepository = new OrmStreamerRepository();
    const ormClipsRepository = new OrmClipsRepository();
    const getUniqueClipUseCase = new GetUniqueClipUseCase(ormStreamerRepository);
    const clip = await getUniqueClipUseCase.execute({ clipid });
    const saveClipsUseCase = new SaveClipsUseCase(ormClipsRepository);
    await saveClipsUseCase.execute(clip[0]);

    return res.status(200).send();
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    });
  }
}
