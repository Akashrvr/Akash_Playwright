exports.Contacts = class Contact{
constructor(page){
this.page = page;
//this.form = page.locator("//li[@class='nav-item parent']//a[@class='nav-link'][normalize-space()='Forms']")
//this.module = page.locator("//li[@type='sales']");
//this.marketing = page.getByRole("//a[@id='dropdownMenuLink']");
this.module = page.getByRole('button', { name: 'Marketing' });

this.marketing = page.getByRole('link', { name: 'Marketing' });
this.errormsg = page.locator("//a[@class='gritter-close']");
this.dropcontact = page.getByRole('button', { name: 'Contacts' });
//this.contactlist = page.locator("//*[@id='home-page']/body/div[1]/header/nav/div/div[2]/ul/li[1]/ul/li[2]/a");
this.contactlist = page.locator("//*[@id='home-page']/body/div[1]/header/nav/div/div[2]/ul/li[1]/ul/li[1]/a");
this.createcontact = page.getByRole('link', { name: 'Create New' });
this.first = page.locator("//input[@placeholder='First Name']");
this.email = page.locator("//input[@placeholder='Enter email address']");
this.secondaryemail = page.locator("//a[contains(text(),'+ Add')]");
this.secondaryvalue = page.locator("input[placeholder='Enter email address'][name='ab-temp-42']");
this.typenumber = page.locator("select[name='ab-temp-6']");
this.phonenumber = page.locator('#ab-phoneTempName-8');
this.ext = page.locator("ab-phoneExtTempName-10");
this.country = page.locator("select[placeholder='Country']");
this.date = page.locator("//input[@placeholder='Select Date']");
this.fileupload = page.locator("input[name='ab-temp-24']");
this.checkbox =page.locator("//div[@data-fieldtype='MULTICHECKBOX']");
this.radiobutton = page.locator("//div[contains(@property-name,'Radio_button')]");

//this.submit = page.locator("//span[normalize-space()='Submit']");
this.submit = page.locator("//*[@id='addSubscriberForm']/div[3]/div/div[2]/button[2]/span[2]");
}
async openMarketingModule(firstname, email, secondaryemailvalue) 
{
    //await this.form.click();
    
    await this.module.click(); 
    await this.marketing.click();
    await this.errormsg.click();
    //await page.locator('#gritter-item-2').getByRole('link').nth(1).click();
    //await page.locator('#sound-noty-deprecate-message').getByText('×').click();
    await this.dropcontact.click();
    await this.contactlist.click();
    await this.createcontact.click();
    await this.first.click();
    await this.first.fill(firstname);
    await this.email.click();
    await this.email.fill(email);
    await this.secondaryemail.click();
    await this.secondaryvalue.click();
    await this.secondaryvalue.fill(secondaryemailvalue);
    await this.typenumber.click();
   // await this.phonenumber.type(String(phonenumber));
    await this.submit.click()


}

}
