//import{test, expect} from ('@playwright/test');
const {test, expect} = require('@playwright/test');
test('radiobutton', async({page})=>{
await page.goto('url');
//To check the locator
await page.locator('locator value').check();
//To check assertions

await expect(await page.locator('locator value')).toBeChecked();
await expect(await page.locator('locator value').isChecked()).toBeTruthy();
await expect(await page.locator('locator value').isChecked()).toBeFalsy;

});

test('check box', async({page})=>{
    await page.goto('URL');
    await page.locator('Locator value').check();
    await expect(await page.locator('Locator value').isChecked()).toBeTruthy();
    await expect(await page.locator('Locator value')).toBeChecked();

    //Select multiple checkboxes by using loop

    const checkboxlocators =['locator value',"//xpath",'.class name','#id'];
    for(const locator of checkboxlocators) //for check
    {
        await page.locator(locator).check();
    }

    for(const locator of checkboxlocators)// for uncheck
    {
        if(await page.locator(locator).isChecked())
        {
            await page.locator(locator).uncheck();
        }
    }






});