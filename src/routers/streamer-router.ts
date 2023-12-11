import { AddStreamerController } from '@/http/controllers/streamer-controller/add-streamer';
import { SearchStreamerController } from '@/http/controllers/streamer-controller/search-streamer';
import { Router } from 'express';

export const StreamerRoute = Router();

StreamerRoute.get('/search', SearchStreamerController);
StreamerRoute.post('/', AddStreamerController);
