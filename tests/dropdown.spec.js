import{test,expect}from '@playwright/test'
test('dropdown',async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/')
  await page.locator('#country').selectOption('United States')
  //const countries = await page.$$('#country option')
  //console.log("options in the dropdown:", countries.length)
 //const countries = await page.locator('#country').textContent()
 //await expect(countries.includes('India')).toBeTruthy()
/* 
 const countries = await page.$$('#country option')
let status=false

for(const option of countries)
{

  console.log(await option.textContent())

}

*/
const countries = await page.$$('#country option')

for(const option of countries)
{
let value = option.textContent()
if(value.includes('India'))
{
  await page.selectOption("#country", value)
  break
}

await page.waitForTimeout(5000)

}





})