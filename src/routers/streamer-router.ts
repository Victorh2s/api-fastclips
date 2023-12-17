import { AddStreamerController } from '@/http/controllers/streamer-controller/add-streamer';
import { DeleteStreamerController } from '@/http/controllers/streamer-controller/delete-streamer';
import { FavoriteStreamerController } from '@/http/controllers/streamer-controller/favorite-streamer';
import { GetAllStreamerController } from '@/http/controllers/streamer-controller/get-all-streamer';
import { Router } from 'express';

export const StreamerRoute = Router();

StreamerRoute.post('/', AddStreamerController);
StreamerRoute.delete('/:broadcasterid', DeleteStreamerController);
StreamerRoute.get('/', GetAllStreamerController);
StreamerRoute.patch('/:broadcasterid', FavoriteStreamerController);
