import express from 'express';
import { StreamerRoute } from './routers/streamer-router';
import { ClipsRoute } from './routers/clips-router';

export const app = express();

app.use(express.json());
app.use('/streamer', StreamerRoute);
app.use('/clips', ClipsRoute);

app.get('/', (req, res) => {
  return res.send('Hello!!');
});
