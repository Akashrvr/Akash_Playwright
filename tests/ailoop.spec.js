import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app-dot-aibot-dot-accountbox-154605.appspot.com/login');
  await page.waitForTimeout(5000);
  await page.getByText('Remember me Forgot Password? Please enter your verification code Open up your').click();
  await page.getByPlaceholder('Work Email').fill('jalendher@engagebay.co');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('AccountBox#123');
  await page.getByRole('button', { name: 'LogIn' }).click();
 // await page.goto('https://engagebayut-dot-aibot-dot-accountbox-154605.appspot.com/home#marketing');
  await page.getByRole('button', { name: 'Marketing' }).click();
  await page.getByRole('link', { name: 'Service' }).click();
  await page.getByRole('link', { name: 'Tickets', exact: true }).click();
  await page.getByRole('heading', { name: 'akash123rvr' }).click();
 // await page.locator('iframe[title="Rich Text Area\\. Press ALT-F9 for menu\\. Press ALT-F10 for toolbar\\. Press ALT-0 for help"]').contentFrame().locator('div').first().click();
  await page.locator('iframe[title="Rich Text Area\\. Press ALT-F9 for menu\\. Press ALT-F10 for toolbar\\. Press ALT-0 for help"]').contentFrame().locator('#tinymce').fill('check every link in the tickets');


  let i = 0;
  while (i < 2) {
    await page.getByRole('button', { name: 'AI', exact: true }).click();
    await page.locator('#mceu_54-text').click();  
    await page.getByText('Use This').click();
    i--;
    await page.waitForTimeout(3000);
    
    
  }
  
  
});