exports.Company  = class Newcompany{
constructor(page){
this.page = page;
this.module = page.getByRole('button', { name: 'Marketing' });
this.salesmodule = page.locator("(//span[normalize-space()='Sales'])[1]");
this.dropdown = page.locator("(//span[contains(text(),'Contacts')])[1]");
this.compayselect = page.locator("//*[@id='home-page']/body/div[1]/header/nav/div/div[2]/div/ul/li[1]/ul/li[2]/a");
this.create = page.locator("(//a[normalize-space()='Create New'])[1]");
this.companyname = page.locator("(//input[@placeholder='Company Name'])[1]");
//this.savebutton = page.locator("//*[@id='addCompanyForm']/div[3]/div/div[2]/button[2]/span");
//this.savebutton = page.locator("/html/body/div[141]/div/div/div/div/div/div/form/div[3]/div/div[2]/button[2]");
this.savebutton = page.getByRole('button', { name: 'Submit' });
}
async companycreation(company){
await this.module.click();
await this.salesmodule.click();
await this.dropdown.click();
await this.compayselect.click();
await this.create.click();
await this.companyname.fill(company);
await this.savebutton.click();



}



}