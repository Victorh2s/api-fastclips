import { AddStreamerController } from '@/http/controllers/streamer-controller/add-streamer';
import { DeleteStreamerController } from '@/http/controllers/streamer-controller/delete-streamer';
import { GetAllStreamerController } from '@/http/controllers/streamer-controller/get-all-streamer';
import { SearchStreamerController } from '@/http/controllers/streamer-controller/search-streamer';
import { Router } from 'express';

export const StreamerRoute = Router();

StreamerRoute.get('/search', SearchStreamerController);
StreamerRoute.post('/', AddStreamerController);
StreamerRoute.delete('/:broadcasterid', DeleteStreamerController);
StreamerRoute.get('/', GetAllStreamerController);
