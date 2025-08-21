import { test, expect } from '@playwright/test';
import { ApiClient } from '../api/axiosApi';

const apiClient = new ApiClient();

test.describe('API Tests', () => {
  test('should return Users', async () => {
    const response = await apiClient.getUsers();
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test('should return Posts based on UserID', async () => {
    const response = await apiClient.getPosts(1);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });
});
