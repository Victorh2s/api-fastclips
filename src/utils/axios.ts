import axios, { type AxiosResponse } from 'axios';

export interface IntGetChannels {
  data: [
    {
      id: string
      login: string
      display_name: string
      type: string
      broadcaster_type: string
      description: string
      profile_image_url: string
      offline_image_url: string
      view_count: number
      created_at: string
    }
  ]
}

export const api = axios.create({
  baseURL: 'https://api.twitch.tv/helix/'
});

export const getChannels = async (channelName: string): Promise<IntGetChannels> => {
  const res = await api.get(`users?login=${channelName}`, {
    headers: {
      'Client-ID': process.env.CLIENT_ID,
      Authorization: `Bearer ${process.env.TOKEN}`
    }
  });

  return res.data;
};

export const searchChannel = async (channelName: string): Promise<AxiosResponse> => {
  const res = await api.get(`search/channels?query=${channelName}`, {
    headers: {
      'Client-ID': process.env.CLIENT_ID,
      Authorization: `Bearer ${process.env.TOKEN}`
    }
  });

  return res.data;
};
