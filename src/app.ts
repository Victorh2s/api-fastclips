import express from 'express';
import { StreamerRoute } from './routers/streamer-router';

export const app = express();

app.use(express.json());
app.use('/streamer', StreamerRoute);

app.get('/', (req, res) => {
  return res.send('Hello!!');
});
