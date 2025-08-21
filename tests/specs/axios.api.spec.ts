import { test, expect } from '@playwright/test';
import AxiosApiClient from '../api/axiosApi';

test.describe('API Tests - Axios', () => {
  test('should return Users', async () => {
    const response = await AxiosApiClient.getUsers();
    const responseData = response.data;
    expect(response.status).toBe(200);
    expect(Array.isArray(responseData)).toBe(true);
    expect(responseData.length).toBeGreaterThan(0);
    responseData.forEach(user => {
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('username');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('address');
      expect(user).toHaveProperty('phone');
      expect(user).toHaveProperty('website');
      expect(user).toHaveProperty('company');
      expect(user.id).toBeTruthy();
      expect(user.name).toBeTruthy();
      expect(user.username).toBeTruthy();
      expect(user.email).toBeTruthy();
      expect(user.address).toBeTruthy();
      expect(user.phone).toBeTruthy();
      expect(user.website).toBeTruthy();
      expect(user.company).toBeTruthy();
    });
  });

  test('should return Posts based on UserID', async () => {
    const response = await AxiosApiClient.getPosts(1);
    const responseData = response.data;
    expect(response.status).toBe(200);
    expect(Array.isArray(responseData)).toBe(true);
    expect(responseData.length).toBeGreaterThan(0);
    responseData.forEach(post => {
      expect(post).toHaveProperty('userId');
      expect(post).toHaveProperty('id');
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('body');
      expect(post.userId).toBeTruthy();
      expect(post.id).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.body).toBeTruthy();
    });
  });
});
