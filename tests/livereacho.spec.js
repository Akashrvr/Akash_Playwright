import { test, expect } from '@playwright/test';
/*
test('test', async ({ page }) => {
  await page.goto('https://sandbox.reacho.com/');
  await page.getByPlaceholder('john@gmail.com').click();
  await page.getByPlaceholder('john@gmail.com').fill('akash123rvr@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('R@mu1234');
  await page.getByRole('button', { name: 'Login' }).click();
let i = 0 ;
  while(i< 20){
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Create Ticket' }).click();
  await page.getByPlaceholder('Subject').click();
  await page.getByPlaceholder('Subject').fill('Subject 2');
  await page.getByRole('button', { name: 'Search customers...' }).click();
  await page.getByText('remorvpt@gmail.com').click();
  //await page.getByRole('button', { name: 'Select any option' }).click();
  //await page.getByText('Support').click();
  await page.locator('iframe[title="Rich Text Area"]').contentFrame().locator('div').first().click();
  await page.locator('iframe[title="Rich Text Area"]').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('helllo every one how is your day');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.waitForTimeout(40000);
  i++;
  
  }
  //await page.goto('https://app.reacho.com/inbox/view/all/67eff45c29eb843469709fa1');
  
});*/

test('Bulk create tickets - reacho sandbox', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://sandbox.reacho.com/');

  // Fill login credentials
  await page.getByPlaceholder('john@gmail.com').fill('akash123rvr@gmail.com'); 
  await page.getByPlaceholder('Password').fill('R@mu1234'); 
  await page.getByRole('button', { name: 'Login' }).click();

  // Create 20 tickets
  for (let i = 0; i < 20; i++) {
   

    await page.getByRole('button', { name: 'Create Ticket' }).click();
    await page.getByPlaceholder('Subject').fill(`Subject ${i + 1}`);

    // Select customer
    await page.getByRole('button', { name: 'Search customers...' }).click();
    await page.getByText('remorvpt@gmail.com', { exact: true }).click();

    // Fill message in rich text editor inside iframe
    const frameLocator = page.frameLocator('iframe[title="Rich Text Area"]');
    await frameLocator.locator('div').first().click();
    await frameLocator.getByLabel('Rich Text Area. Press ALT-0').fill('Hello everyone, how is your day?');

    // Send the ticket
    await page.getByRole('button', { name: 'Send' }).click();

    // Wait before creating next ticket
   
  }
});



