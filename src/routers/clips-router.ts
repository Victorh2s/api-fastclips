import { GetClipsController } from '@/http/controllers/clips/get-clips';
import { GetUniqueClipController } from '@/http/controllers/clips/get-unique-clip';
import { SaveClipsController } from '@/http/controllers/clips/save-clips';
import { Router } from 'express';

export const ClipsRoute = Router();

ClipsRoute.get('/', GetClipsController);
ClipsRoute.get('/:clipid', GetUniqueClipController);
ClipsRoute.post('/:clipid', SaveClipsController);
