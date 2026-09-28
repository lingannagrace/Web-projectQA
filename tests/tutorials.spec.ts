import {test, expect} from '@playwright/test';
test('tutorials', async ({ page }) => {

    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
//await page.getByTestId('gender-male').selectOption();

//await page.mouse.wheel(0,600);
await expect(page.getByText('Selenium - Automation Practice Form')).toBeVisible();
await page.getByTitle('tutorialspoint');

await page.getByPlaceholder('First Name').fill('lakshminarayna');
await page.getByPlaceholder('name@example.com').fill('lakshmi4u100@gmail.com');
//await page.getByRole('radio', {name: 'Male'}).check();
//await page.getByRole('radio', { name: 'Male' }).check();
//await page.getByTestId('gender')
//await page.locator("//label[text()='Male']").click();
await page.getByPlaceholder('Enter Mobile Number').fill('9704037048');
//await page.locator("//input[@id='dob']").fill('28-09-2026');
await page.locator('input[type="date"]').fill('1995-06-15');
await page.getByPlaceholder('Enter Subject').fill('Computer Science');
    //await page.getByRole('checkbox', {name: 'sports'}).click();
   //await page.locator('#picture').click().setInputFiles('C:\\Users\\ramad\\OneDrive\\Desktop\\Bootstrap.png');
    //await page.getByRole('button', {name: 'ChooseFile'}).setInputFiles('C:\\Users\\ramad\\OneDrive\\Desktop\\Bootstrap.png');
    await page.getByTestId('picture').setInputFiles('C:\\Users\\ramad\\OneDrive\\Desktop\\Bootstrap.png');
    await page.getByPlaceholder('Currend Address').fill('Testing');
    await page.locator("//select[@id='state']").selectOption('NCR');
    await page.locator("//select[@id='city']").selectOption('Agra');
    await page.locator("//input[@type='submit']").click();

await page.waitForTimeout(8000);
});