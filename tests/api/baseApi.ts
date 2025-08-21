export class BaseApiClient {
  protected usersUrl: string = 'https://jsonplaceholder.typicode.com/users';
  protected postsUrl = (userId: string | number): string =>
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
}
