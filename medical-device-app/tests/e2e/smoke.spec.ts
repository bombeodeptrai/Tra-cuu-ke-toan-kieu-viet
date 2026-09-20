import { test, expect } from '@playwright/test';

test.describe('Medical App E2E', () => {
  test('Dashboard loads without crashing', async ({ page }) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    page.on('pageerror', err => {
      pageErrors.push(err.message);
    });

    await page.goto('/');
    
    // Give it time to load dynamic data
    await page.waitForTimeout(2000);
    
    expect(pageErrors.length).toBe(0);
    expect(consoleErrors.length).toBe(0);
    
    // Check if basic elements render
    await expect(page.locator('text=Medical Device App')).toBeVisible();
  });

  test('Comparison Page loads without errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    page.on('pageerror', err => {
      pageErrors.push(err.message);
    });

    await page.goto('/#/so-sanh');
    
    await page.waitForTimeout(2000);
    
    expect(pageErrors.length).toBe(0);
    expect(consoleErrors.length).toBe(0);
  });
});
