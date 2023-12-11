import { AddStreamerController } from '@/http/controllers/StreamerController/AddStreamer';
import { SearchStreamerController } from '@/http/controllers/StreamerController/SearchStreamer';
import { Router } from 'express';

export const StreamerRoute = Router();

StreamerRoute.get('/search', SearchStreamerController);
StreamerRoute.post('/', AddStreamerController);
