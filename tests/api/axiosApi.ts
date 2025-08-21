import axios from 'axios';

export class ApiClient {
  private usersUrl: string = 'https://jsonplaceholder.typicode.com/users';
  private postsUrl = (userId: string | number): string =>
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

  async getUsers(): Promise<any> {
    const response = await axios.get(this.usersUrl);
    return {
      status: response.status,
      data: response.data,
    };
  }

  async getPosts(userId: string | number): Promise<any> {
    const response = await axios.get(this.postsUrl(userId));
    return {
      status: response.status,
      data: response.data,
    };
  }
}
