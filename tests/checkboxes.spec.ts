import {test, expect} from '@playwright/test';
test('checkBoxes', async ({ page }) => {

    await page.goto('https://www.tutorialspoint.com/selenium/practice/check-box.php');

    //await page.goto('https://www.playwrightautomation.com/practice.html');
//select all the multiple boxes
    //await page.getByTestId('checkbox-select-all').check();
//await page.locator("//input[@type='checkbox']").click();
//await page.locator("//input[@type='checkbox']").check();
await page.locator("//input[@type='checkbox']").first().check();
    //select the one by one checkboxes

 /*   await page.getByTestId('checkbox-sunday').check();
    await page.getByTestId("checkbox-monday").check();
    await page.getByTestId("checkbox-tuesday").check();
    await page.getByTestId("checkbox-wednesday").check();
    await page.getByTestId("checkbox-thursday").check();
    await page.getByTestId("checkbox-friday").check();
    await page.getByTestId("checkbox-saturday").check();
   // await page.getByTestId("checkbox-monday").check();*/
   
await page.waitForTimeout(8000);
});