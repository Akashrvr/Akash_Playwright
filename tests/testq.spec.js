import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.engagebay.com/login');
  await page.getByPlaceholder('Work Email').click();
  await page.getByPlaceholder('Work Email').fill('akash123rvr@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('R@mu1234');
  await page.getByRole('button', { name: 'LogIn' }).click();
  await page.getByRole('button', { name: 'Marketing' }).click();
  await page.getByRole('link', { name: 'Marketing' }).click();
  await page.locator('#gritter-item-2').getByRole('link').nth(1).click();
  await page.locator('#sound-noty-deprecate-message').getByText('×').click();
  await page.getByRole('button', { name: 'Contacts' }).click();
  await page.getByRole('link', { name: 'Contacts', exact: true }).click();
  await page.getByRole('link', { name: 'Create New' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('ramu');
  await page.getByPlaceholder('Enter email address').click();
  await page.getByPlaceholder('Enter email address').fill('venkatasdfg@gmail.com');
  await page.locator('input[name="ab-temp-20"]').click();
  await page.locator('input[name="ab-temp-20"]').fill('jh');
  await page.getByRole('button', { name: 'Submit' }).click();
});