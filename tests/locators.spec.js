const {test, expect}=require('@playwright/test')
//import{test, expect} from '@playwright/test'
test('locator',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
await page.getByRole('button',{id: 'btn2'}).click()














})