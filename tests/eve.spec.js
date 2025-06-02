import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('https://app.engagebay.com/login');
 
  await page.waitForTimeout(5000)
  
  await page.getByPlaceholder('Work Email').click();
  await page.getByPlaceholder('Work Email').fill('akash123rvr@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('R@mu1234');
  await page.getByRole('button', { name: 'LogIn' }).click();
  //await page.goto('https://gmaildmjz.engagebay.com/home#marketing');
 await page.locator('#gritter-item-2').getByRole('link').nth(1).click();
 //await page.locator('#sound-noty-deprecate-message').getByText('×').click();
   //await page.waitForSelector('button', { name: 'Contacts' }, { state: 'visible' });

  await page.getByRole('button', { name: 'Contacts' }).click();
 // await page.waitForSelector('link', { name: 'Contacts', exact: true }, { state: 'visible' });
  await page.getByRole('link', { name: 'Contacts', exact: true }).click();
  await page.getByRole('link', { name: 'Create New' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('ramu 12');
  await page.locator('input[name="ab-temp-20"]').click();
 // await page.locator('input[name="ab-temp-20"]').fill('123');
  /*await page.locator("//select[@placeholder='Country']").click();
   const options = await page.$$eval("//select[@placeholder='Country']", elements =>
    elements.map(el => el.textContent.trim()));
     const targetOption = 'India';
  await page.selectOption('select[placeholder="Country"]', { label: targetOption });*/
  
  await page.selectOption("//select[contains(@class, 'subtype') and @name='ab-temp-6']/option[@value='main']");
  await page.waitForTimeout(5000);
    console.log("Dropdown Options:", options);
  await page.getByRole('button', { name: 'Submit' }).click();
  //await page.getByRole('button', { name: 'User' }).click();
  //await page.getByRole('link', { name: 'Logout' }).click();
});