import { DeleteSavedClipController } from '@/http/controllers/clips/delete-saved-clip';
import { GetClipsController } from '@/http/controllers/clips/get-clips';
import { GetSavedClipsController } from '@/http/controllers/clips/get-saved-clips';
import { GetUniqueClipController } from '@/http/controllers/clips/get-unique-clip';
import { SaveClipsController } from '@/http/controllers/clips/save-clips';
import { Router } from 'express';

export const ClipsRoute = Router();

ClipsRoute.get('/', GetClipsController);
ClipsRoute.get('/saved-clips', GetSavedClipsController);
ClipsRoute.get('/:clipid', GetUniqueClipController);
ClipsRoute.post('/:clipid', SaveClipsController);
ClipsRoute.delete('/:clipid', DeleteSavedClipController);
