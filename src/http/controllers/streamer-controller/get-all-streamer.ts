import { OrmStreamerRepository } from '@/repositories/orm/orm-streamer';
import { GetAllStreamerUseCase } from '@/use-cases/streamer-use-case/get--all-streamer';
import { type Request, type Response } from 'express';

export async function GetAllStreamerController (req: Request, res: Response) {
  const { broadcastername, pagenumber, pagesize } = req.query;
  console.log(req.query);
  console.log(pagenumber, pagesize);
  const querys = {
    broadcasterName: broadcastername ? String(broadcastername) : undefined,
    skip: pagenumber ? Number(pagenumber) : undefined,
    pageSize: pagesize ? Number(pagesize) : undefined
  };
  try {
    console.log(querys.skip, querys.pageSize);
    const ormStreamerRepository = new OrmStreamerRepository();
    const getAllStreamerUseCase = new GetAllStreamerUseCase(ormStreamerRepository);
    const data = await getAllStreamerUseCase.execute({ broadcasterName: querys.broadcasterName, skip: querys.skip, pageSize: querys.pageSize });

    return res.json(data).status(200);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    });
  }
}
