import { test } from '@playwright/test';
import { chromium } from 'playwright';

test('Maximize Chrome', async () => {

  const browser = await chromium.launch({
    headless: false,
    channel: 'chrome',
    args: ['--start-maximized']
  });

  const context = await browser.newContext({
    viewport: null
  });

  const page = await context.newPage();

  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.waitForTimeout(5000);

  await browser.close();

});