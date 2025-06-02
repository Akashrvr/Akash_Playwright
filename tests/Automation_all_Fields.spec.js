import {test,exports, expect} from "@playwright/test"
test.skip('input',async({page})=>{
    
        await page.goto('https://testautomationpractice.blogspot.com/');
   /*   
    // Compare page text

        // const heading = page.locator("h1.title"); // shorter selector
        //await expect(heading).toHaveText("Automation Testing Practice");
        //console.log(actual_heading);
       const heading = await page.locator('h1.title').textContent();
       expect(heading?.trim()).toBe('Automation Testing Practice');

    //page tilte
        const title = await page.title();
        expect(title).toBe('Automation Testing Practice');

    //Input field

        await page.locator('textarea').fill('Govindhapuram\nVitalrao Nagar\nHyderabad');
        
    //Radio Button
        await expect(await page.locator('#male').isChecked()).toBeFalsy();
        await page.locator('#male').check();
        await expect( await page.locator('#male')).toBeChecked();
    /*   
    
    //CheckBox
        await page.locator('#saturday').check();
        await expect(await page.locator('#saturday').isChecked).toBeTruthy()    
        await page.waitForTimeout(3000);
    */
/*
    //Multi CheckBox
        const days =['#sunday','#saturday','#friday']
        for(const locator of days)
        {
            await page.locator(locator).check();
        }
        await page.waitForTimeout(3000);

        for(const locator of days)// to uncheck
        {
            if(await page.locator(locator).isChecked())
            {
                await page.locator(locator).uncheck()
            }
        }
        await page.waitForTimeout(3000);

    //Dropdown
        await page.locator('#country').selectOption('Japan');
        await page.locator("#country",'Japan')
        await page.locator('#country').selectOption({label:'Japan'});
        await page.locator('#country').selectOption({value:'Japan'});
        await page.locator('#country').selectOption({index: 6}); 

       const options = await page.locator('#country option');
       await expect(options).toHaveCount(10);

       const loop_options = await page.$$('#country option');
       for(const alloption of loop_options){
        console.log(await alloption.textContent());
       }

       //Loop to select option
       const alloptions =await page.$$('#country option');
    
       for(const option of alloptions){
        let value = await option.textContent();
        if(value.includes('Japan'))
        {
           await page.selectOption("#country",value);
           break;
        }

       }
*/
      /* //Alerts
       page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();

       })

       await page.click('#alertBtn');
       await page.waitForTimeout(5000);
*/
/*
     page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        //await dialog.accept();
        await dialog.dismiss();

     })

     await page.click('#confirmBtn');
     //await expect(page.locator('#demo')).toHaveText('You pressed OK!');
    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!')
     await page.waitForTimeout(5000);
*/

     page.on('dialog',async dialog =>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Ramu');
     })
     await page.click('#promptBtn');
     expect(page.locator('#demo')).toHaveText('Hello Ramu! How are you today?');
     await page.waitForTimeout(5000);

    });

    //Bootsrap dropdown

    test.skip('bootsrap',async({page})=>{

        await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
        await page.locator('.multiselect').click();
        let options = await page.$$('ul>li label');
        //await expect(options).toHaveCount(11);

        for(let option of options){
            const value = await option.textContent()
            console.log("values",value)
            if(value.includes('Angular'))
            {
                await option.click();
               
            }
        }
        
        for(let option of options)
        {
            const value = await option.textContent();
            console.log("list of values",value);
            if(value.includes('Angular')||value.includes('HTML')||value.includes('CSS'))
            {
                await option.click()
            }
        }
        await page.waitForTimeout(5000);

    })
    //Auto suggest

    test.skip('autosuggest',async({page})=>{

        await page.goto('https://www.abhibus.com');
        await page.locator("//input[@placeholder='From Station']").fill('delhi');
        await page.waitForSelector("//div[normalize-space()='Dairy Farm']")
        const fromvalue = await page.$$("ul>li")
       
        for(let option of fromvalue){
           const value = await option.textContent();
           console.log("listvalues",value)

           if(value.includes('Dairy Farm'))
           {
            await option.click();
            break;
           }
        }

        await page.waitForTimeout(5000);

    })

test.skip('frames',async ({page})=>{

await page.goto('https://ui.vision/demo/webtest/frames/');
/*const allframes = await page.frames();
console.log("number of frames:",allframes.length);
co//nst frame = await page.frame('name');
//const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
//await frame1.fill("[name='mytext1']",'Frame1');

//approch 2
const frames1 = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
await frames1.fill("all is well");
*/

//Nested frames
const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
const chaildframe = await frame3.childFrames();
await chaildframe[0].locator("//div[@id='i21']//div[@class='uHMk6b fsHoPb']").check();

await page.waitForTimeout(5000);


})


test.skip('table',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
//const table = await page.locator("//table[@name='BookTable']");
//const value = await page.locator('tbody tr:nth-child(6) td:nth-child(3)').textContent();
//console.log('text having:', value);
const table = await page.locator('#productTable');

const columns = await table.locator('thead tr th');
console.log('number of columns:', await columns.count());
expect(await columns.count()).toBe(4);

const rows = await table.locator('tbody tr');
console.log('number of rows:', await rows.count());
expect(await rows.count()).toBe(5);

await selectOption(rows,page,'Laptop');
await selectOption(rows,page,'Smartwatch');
await selectOption(rows,page,'Wireless Earbuds');

await page.waitForTimeout(5000)


})


async function selectOption(rows, page, name) {
    const matchedrow = rows.filter({
        has: page.locator('td'),
        hasText: name

    }) 
    await matchedrow.locator('input').check()
    
}


test('Click actions',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
  /*  const dbclick = await page.locator("//button[normalize-space()='Copy Text']");
   // Double click
   await dbclick.dblclick();
   const field_2 =await page.locator('#field2');
   await expect(field_2).toHaveValue('Hello World!');
   await page.waitForTimeout(5000);

   //Drag and drop
   const drag = await page.locator('#draggable');
   const drop = await page.locator('#droppable');

   await drag.dragTo(drop);
  const heading = await page.locator("//p[normalize-space()='Dropped!']");
  await page.waitForTimeout(5000);
  await expect(heading).toHaveText('Dropped!');

  //await page.locator('#singleFileInput').setInputFiles('C:\Users\ramu\OneDrive\Desktop\Playwrite\tests\UploadFiles\CSV timezone.csv');
  //await page.waitForTimeout(5000);

  const path = require('path');
const filePath = path.resolve('tests', 'UploadFiles', 'CSV timezone.csv');
const filepath2 = path.resolve('tests','UploadFiles','SampleSubscribers (2).csv')
//await page.locator('#singleFileInput').setInputFiles(filePath);
await page.locator('#multipleFilesInput').setInputFiles([filePath,filepath2]);
await page.waitForTimeout(5000);
//await page.locator("//button[normalize-space()='Upload Single File']").click();
await page.locator("//button[normalize-space()='Upload Multiple Files']").click();

await page.screenshot({path:'tests/Screenshot/'+Date.now()+'firstscreenshot.png'});
*/
await page.screenshot({path:'tests/Screenshot/'+'fullpage'+Date.now()+'.png',fullPage:true});




  













})








    