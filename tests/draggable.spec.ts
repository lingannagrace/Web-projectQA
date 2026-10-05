import { test, expect } from '@playwright/test';

test('Draggable - Simple', async ({ page }) => {

  await page.goto(
    'https://www.tutorialspoint.com/selenium/practice/dragabble.php'
  );

  const draggable = page.getByText('Drag me around', { exact: true });

  await expect(draggable).toBeVisible();

  // Drag the element
  await draggable.dragTo(
    page.locator('body')
  );
});