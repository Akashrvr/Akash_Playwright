import{test,expect}from'@playwright/test'
test('input field',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')

//Input field text box:
/*await page.locator("//input[@id='name']").fill('ramu')
await expect(page.locator("//input[@id='name']")).toBeVisible()
await expect(page.locator("//input[@id='name']")).toBeEmpty()
await expect(page.locator("//input[@id='name']")).toBeEditable()
await expect(page.locator("//input[@id='name']")).toBeEnabled()
await page.fill("//input[@id='name']",'Ramu')*/

//Radiobutton:
/*
await page.locator("//input[@id='male']").check()
await expect(await page.locator("//input[@id='male']")).toBeChecked()
expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy()
expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy()
*/

//Checkbox
/*await page.locator("//input[@id='tuesday']").check()
await expect(await page.locator("//input[@id='tuesday' and @type='checkbox']")).toBeChecked()
await expect(await page.locator("//input[@id='tuesday' and @type='checkbox']").isChecked()).toBeTruthy()
await expect(await page.locator("//input[@id='thursday' and @type='checkbox']").isChecked()).toBeFalsy()
*/

//multicheckbox
/*const checkboxlist =["//input[@id='tuesday' and @type='checkbox']","//input[@id='thursday' and @type='checkbox']","//input[@id='saturday' and @type='checkbox']"]

for(const locate of checkboxlist)
{
    await page.locator(locate).check()
}

for (const locate of checkboxlist)
{
if(await page.locator(locate).isChecked())
{
   await page.locator(locate).uncheck()

}
}*/
const countries = await page.$$('#country option');
for(const country of countries)
{
let select = await country.textContent();
if (select.includes('China'))
{
await page.locator('#country').click();
await page.selectOption('#country', select);
break;

}
}
await page.waitForTimeout(5000);

});