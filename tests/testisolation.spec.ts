    import test, { expect } from "@playwright/test";

    test('test isolation 1' , async ({page}) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
        await expect(page).toHaveTitle(/Automation/);
        await page.waitForTimeout(2000);
        console.log("Test 1 successfully")

    });
    test('test isolation 2' , async ({page}) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
        await expect(page).toHaveTitle(/Automation/);
        await page.waitForTimeout(2000);
        console.log("Test 2 successfully")

    });
    test('test isolation 3' , async ({page}) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
        await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
        await page.waitForTimeout(2000);
        console.log("Test 3 successfully")

    });
