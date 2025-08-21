import { test, expect } from '@playwright/test';
import PlaywrightApiClient from '../api/playwrightApi';

test.describe('API Tests', () => {
  test('should return Users', async ({ request }) => {
    const response = await PlaywrightApiClient.getUsers(request);
    const responseData = await response.json();
    expect(response.status()).toBe(200);
    expect(Array.isArray(responseData)).toBe(true);
    expect(responseData.length).toBeGreaterThan(0);
    for (const user of responseData) {
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('username');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('address');
      expect(user).toHaveProperty('phone');
      expect(user).toHaveProperty('website');
      expect(user).toHaveProperty('company');
    }
  });

  test('should return Posts based on UserID', async ({ request }) => {
    const response = await PlaywrightApiClient.getPosts(request, 1);
    const responseData = await response.json();
    expect(response.status()).toBe(200);
    expect(Array.isArray(responseData)).toBe(true);
    expect(responseData.length).toBeGreaterThan(0);
    for (const post of responseData) {
      expect(post).toHaveProperty('userId');
      expect(post).toHaveProperty('id');
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('body');
    }
  });
});
