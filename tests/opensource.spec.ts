import { test, expect } from '@playwright/test';

test('opensource', async ({ page }) => {

    //verify login functionality of opensource orangehrm application
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveTitle(/OrangeHRM/);
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.waitForTimeout(4000);

// verify the dashboard page is displayed after login
await page.getByRole('heading', { name: 'Dashboard' }).isVisible();

await expect(page).toHaveTitle(/OrangeHRM/);
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
await page.waitForTimeout(4000);
await page.locator("//a[@href='/web/index.php/recruitment/viewRecruitmentModule']").click();

 // Select Job Title dropdown
  //const jobTitle = page.getByText('Job Title').locator('..').getByRole('combobox');

  //await jobTitle.click();

  // Select option
  //await page.getByText('Software Engineer', { exact: true }).click();

//await page.waitForTimeout(4000);

const jobTitle = page.locator('.oxd-select-text').first();

  await expect(jobTitle).toBeVisible();

  await jobTitle.click();

  await page.getByText('Software Engineer', {
    exact: true
  }).click();
//job vacany
  const jobVacancy = page.locator('.oxd-select-text').nth(1);

await expect(jobVacancy).toBeVisible();

await jobVacancy.click();
await page.getByText('Senior QA Lead', { exact: true }).first().click();
//await page.getByText('Senior QA Lead', { exact: true }).click();

await page.waitForTimeout(4000);
//Hiring Manager
const hiringManager = page.locator('.oxd-select-text').nth(2);

await expect(hiringManager).toBeVisible();  

await hiringManager.click();
await page.getByText('Rahul Patil', { exact: true }).first().click();
//status

const status = page.locator('.oxd-select-text').nth(3);

await expect(status).toBeVisible(); 

await status.click();
 await page.getByText('Shortlisted', { exact: true }).first().click();
 await page.waitForTimeout(1000);
 //candidate name
 await page.locator("//input[@placeholder='Type for hints...']").fill('Alone');
 //await expect(candidateName).toBeVisible();
 //await expect(candidateName).toBeVisible();
 await page.getByText('Alone David Malan', { exact: true }).click();

 await page.waitForTimeout(1000);

 //keywords

 await page.getByPlaceholder('Enter comma seperated words...').fill('Java, Selenium, Cucumber');
 await page.waitForTimeout(1000);

 //date range
 /*const dateInputs= page.locator("//input[@placeholder='yyyy-mm-dd']");
 await dateInputs.nth(0).fill('2023-01-01');
 await dateInputs.nth(1).fill('2023-12-31');
 await page.waitForTimeout(1000);  */ 
//Method of application

const methodOfApplication = page.locator('.oxd-select-text').nth(4);

await expect(methodOfApplication).toBeVisible();

await methodOfApplication.click();
await page.getByText('Manual', { exact: true }).first().click();
await page.waitForTimeout(1000);

await page.locator("//button[@type='submit']").click();
await page.waitForTimeout(1000);
// 
});