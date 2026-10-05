import { test, expect } from '@playwright/test';

test('Sortable - Drag and Drop', async ({ page }) => {

  await page.goto(
    'https://www.tutorialspoint.com/selenium/practice/sortable.php'
  );

  // Verify page title
  await expect(page).toHaveTitle(/Sortable/);

  // Verify list items
  await expect(page.getByText('Mark', { exact: true })).toBeVisible();
  await expect(page.getByText('Jacob', { exact: true })).toBeVisible();
  await expect(page.getByText('Larry the Bird', { exact: true })).toBeVisible();

  // Locate sortable rows
  const mark = page.getByText('Mark', { exact: true });
  const jacob = page.getByText('Jacob', { exact: true });
  const larry = page.getByText('Larry the Bird', { exact: true });

  // Drag Mark below Jacob
  await mark.dragTo(jacob);
  // Drag Jacob below Larry
  await jacob.dragTo(larry);
});