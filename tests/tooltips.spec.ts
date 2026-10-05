import { test, expect } from '@playwright/test';

test('tooltips', async ({ page, browser }) => {

await page.goto('https://www.tutorialspoint.com/selenium/practice/tool-tips.php');

await page.getByText('Tool Tips');
await expect(page).toHaveTitle(/Tool Tips/);
await expect(page).toHaveURL('https://www.tutorialspoint.com/selenium/practice/tool-tips.php');

//await page.locator("//button[@type='button']").hover();

const tooltipButton = await page.getByRole('button', { name: 'Tooltip on top'});
//tooltipButton.hover();
    await tooltipButton.click();
// Verify button is visible
  await expect(tooltipButton).toBeVisible();
//await expect(tooltipButton).toBeVisible();
  browser.close();


});
test('Tooltip on right', async ({ page, browser }) => {

await page.goto('https://www.tutorialspoint.com/selenium/practice/tool-tips.php');

await page.getByText('Tool Tips');
await expect(page).toHaveTitle(/Tool Tips/);
await expect(page).toHaveURL('https://www.tutorialspoint.com/selenium/practice/tool-tips.php');

//await page.locator("//button[@type='button']").hover();

const tooltipButton1 = await page.getByRole('button', { name: 'Tooltip on right'});
await tooltipButton1.hover();
    //await tooltipButton.click();
// Verify button is visible
await page.waitForTimeout(4000);
  await expect(tooltipButton1).toBeVisible();
//await expect(tooltipButton).toBeVisible();
  browser.close();
});

test('Tooltip on bottom', async ({ page, browser }) => {
    await page.goto('https://www.tutorialspoint.com/selenium/practice/tool-tips.php');

await page.getByText('Tool Tips');
await expect(page).toHaveTitle(/Tool Tips/);
await expect(page).toHaveURL('https://www.tutorialspoint.com/selenium/practice/tool-tips.php');

const tooltipButton2 = await page.getByRole('button', {name: 'Tooltip on bottom'});
await tooltipButton2.hover();
// Verify button is visible
await page.waitForTimeout(4000);
await expect(tooltipButton2).toBeVisible();
//await expect(tooltipButton).toBeVisible();
browser.close();
});

test('Tooltip on left', async ({ page, browser }) => {
await page.goto('https://www.tutorialspoint.com/selenium/practice/tool-tips.php');      
await page.getByText('Tool Tips');
await expect(page).toHaveTitle(/Tool Tips/);    
await expect(page).toHaveURL('https://www.tutorialspoint.com/selenium/practice/tool-tips.php');
const tooltipButton3 = await page.getByRole('button', {name: 'Tooltip on left'});
await tooltipButton3.hover();   
await page.waitForTimeout(4000);
await expect(tooltipButton3).toBeVisible();
browser.close();



});
