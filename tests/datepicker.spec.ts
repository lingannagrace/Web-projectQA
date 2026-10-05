import { test, expect } from '@playwright/test';

test('date-picker', async ({ page }) => {

  await page.goto('https://www.tutorialspoint.com/selenium/practice/date-picker.php' );
    
 //verification of page title
  await page.getByText('Date Picker');
  await expect(page).toHaveTitle(/Date Picker/);
  await expect(page).toHaveURL('https://www.tutorialspoint.com/selenium/practice/date-picker.php'); 

//await page.locator('div').filter({ hasText: 'JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember' }).nth(3).click();
await page.getByPlaceholder('Select date and time').click();  
await page.getByLabel('October 5,').first().click();
  await page.locator('#datetimepicker1').fill('2026-10-05 12:00');
  await page.getByRole('spinbutton', { name: 'Hour' }).click();
  await page.getByRole('spinbutton', { name: 'Minute' }).click();
  await page.locator('#datetimepicker2').click();
  await page.getByLabel('October 7,').nth(1).click();
  await page.locator('#datetimepicker2').fill('2026-10-07 12:00');
  await page.getByText('PM').nth(1).click();
  await page.locator('#datetimepicker2').fill('2026-10-07 00:00');
  await page.getByRole('main').click();
  await page.getByPlaceholder('Select date and time').click();

  });
