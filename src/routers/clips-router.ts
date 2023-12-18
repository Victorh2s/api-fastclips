import { GetClipsController } from '@/http/controllers/clips/get-clips';
import { Router } from 'express';

export const ClipsRoute = Router();

ClipsRoute.get('/', GetClipsController);
