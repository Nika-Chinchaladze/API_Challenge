import { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApiClient } from './baseApi';

class PlaywrightApiClient extends BaseApiClient {
  async getUsers(request: APIRequestContext): Promise<APIResponse> {
    return await request.get(this.usersUrl);
  }

  async getPosts(
    request: APIRequestContext,
    userId: string | number,
  ): Promise<APIResponse> {
    return await request.get(this.postsUrl(userId));
  }
}

export default new PlaywrightApiClient();
