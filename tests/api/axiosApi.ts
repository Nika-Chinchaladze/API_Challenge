import axios, { AxiosResponse } from 'axios';
import { BaseApiClient } from './baseApi';
import type { User, Post } from '../types/data.types';

class AxiosApiClient extends BaseApiClient {
  async getUsers(): Promise<AxiosResponse<User[]>> {
    return await axios.get<User[]>(this.usersUrl);
  }

  async getPosts(userId: string | number): Promise<AxiosResponse<Post[]>> {
    return await axios.get(this.postsUrl(userId));
  }
}

export default new AxiosApiClient();
