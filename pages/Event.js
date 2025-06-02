exports.Event1 = class Sevent{
constructor(page)
{
this.page = page ;
this.module = page.getByRole('button', { name: 'Marketing' });
this.salesmodule = page.locator("(//span[normalize-space()='Sales'])[1]");
this.calendar = page.locator("//a[contains(text(),'Calendar')]");
this.event = page.locator("//a[normalize-space()='New Event']");
this.evename = page.locator("//input[@placeholder='Event name']");
this.starttime = page.locator('#start_time');
//this.calendars1 = page.locator("//div[@class='bootstrap-datetimepicker-widget dropdown-menu usetwentyfour bottom']");
this.enddate = page.locator('#end_time');
//this.calendar2 = page.locator("//div[@class='bootstrap-datetimepicker-widget dropdown-menu usetwentyfour bottom']");
this.reminder = page.locator('#reminder_time');
//this.calendar3 = page.locator("//div[@class='bootstrap-datetimepicker-widget dropdown-menu usetwentyfour bottom']");
this.save = page.locator("//button[normalize-space()='Save']");
this.outclick = page.locator('.modal-header');


}
async BookEvent(eventname)
{

    await this.module.click();
    await this.salesmodule.click();
    await this.calendar.click();
    await this.event.click();
    await this.evename.fill(eventname);
    await this.starttime.click();

    const monthyear = "April 2025"
    const date = "22"


    while(true){
        const currentmonth = await this.page.locator("//th[@title='Select Month']").textContent();
        console.log('month:', currentmonth);
            if(currentmonth === monthyear)
            {
                break;
            }
            await this.page.locator("//span[@title='Next Month']").click();
            await this.page.waitForTimeout(500);
    }

    await this.page.locator(`//td[contains(@data-action,'selectDay')][normalize-space()='${date}']`).click();   
    await this.outclick.click();
    await this.page.waitForTimeout(500)

    await this.enddate.click();
    
    const monthyear1 ="April 2025";
    const enddate = "22";
    
    while(true)
    {
    const endmonth = await this.page.locator("//th[@title='Select Month']").textContent();
    console.log('month:', endmonth);
    
    if(endmonth === monthyear1)
    {
        break;
    }
    await this.page.locator("//span[@title='Next Month']").click();
    await this.page.waitForTimeout(500)
    
    }
await this.page.locator(`//td[contains(@data-action,'selectDay')][normalize-space()='${enddate}']`).click();
await this.outclick.click();
await this.page.waitForTimeout(500)   

await this.reminder.click();

const remindermonth ="April 2025";
const reminderdate = "22";

while(true)
{
const actualremaindermonth = await this.page.locator("//th[@title='Select Month']").textContent()
if(actualremaindermonth === remindermonth)
{
break;
}
await this.page.locator("//span[@title='Next Month']").click();
await this.page.waitforTimeout(500);

}
await this.page.locator(`//td[contains(@data-action,'selectDay')][normalize-space()='${reminderdate}']`).click()
await this.outclick.click();


await this.save.click();

}

}
