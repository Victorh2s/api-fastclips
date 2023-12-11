import { Router } from 'express';

import { SearchStreamer } from '@/http/controllers/StreamerController/SearchStreamer';

export const StreamerRoute = Router();

StreamerRoute.get('/search', SearchStreamer);
