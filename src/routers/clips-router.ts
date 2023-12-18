import { GetClipsController } from '@/http/controllers/clips/get-clips';
import { GetUniqueClipController } from '@/http/controllers/clips/get-unique-clip';
import { Router } from 'express';

export const ClipsRoute = Router();

ClipsRoute.get('/', GetClipsController);
ClipsRoute.get('/:clipid', GetUniqueClipController);