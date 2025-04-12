import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e', // o ./tests si cambias la estructura
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  retries: 0,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    baseURL: 'http://localhost:8100', // cambia según el host de tu app
  },
});