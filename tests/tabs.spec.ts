import { test, expect } from '@playwright/test';

test('tabs', async ({ page }) => {

await page.goto('https://www.tutorialspoint.com/selenium/practice/tabs.php');

//verify the page title and URL
await page.getByText('Tabs');
await expect(page).toHaveTitle(/Tabs/);
await expect(page).toHaveURL('https://www.tutorialspoint.com/selenium/practice/tabs.php');

//Home
await page.locator("//button[@id='nav-home-tab']").click();
await page.waitForTimeout(4000);

await expect(page.locator("//div[@id='nav-home']")).toBeVisible();
const text = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  await expect(page.locator('body')).toContainText(text);


  //Profile
await page.locator("//button[@id='nav-profile-tab']").click();
await page.waitForTimeout(4000);
await expect(page.locator("//div[@id='nav-profile']")).toBeVisible();

const text1 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";  
await expect(page.locator('body')).toContainText(text1);

//Contact
await page.locator("//button[@id='nav-contact-tab']").click(); 
await page.waitForTimeout(4000);
await expect(page.locator("//div[@id='nav-contact']")).toBeVisible();       
const text2 = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.";

await expect(page.locator('body')).toContainText(text2);    

});