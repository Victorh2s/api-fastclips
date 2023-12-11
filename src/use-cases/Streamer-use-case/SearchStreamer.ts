import { searchChannel } from '@/utils/axios';

export interface IntSearchStreamerUseCase {
  loginName: string
}

export class SearchStreamerUseCase {
  async execute ({
    loginName
  }: IntSearchStreamerUseCase) {
    const resChannel = await searchChannel(loginName);

    return resChannel.data;
  }
}
