exports.Deal =class createdeal{

constructor(page){
this.page = page;
this.module = page.getByRole('button', { name: 'Marketing' });
this.salesmodule = page.locator("(//span[normalize-space()='Sales'])[1]");
this.dealbutton = page.locator("//a[contains(text(),'Deals')]");
this.createbutton = page.locator("//a[normalize-space()='Create New']");
this.dealname = page.locator("//input[@placeholder='Deal Name']");
this.amount = page.locator("//input[@placeholder='Deal Amount']");
this.closedate = page.locator("//input[@placeholder='Close Date']");
this.savebut = page.locator("//*[@id='addDealForm']/div[3]/div/button[2]");

}
async dealcreation(dealname, amount){
    await this.module.click();
    await this.salesmodule.click();
    await this.dealbutton.click();
    await this.createbutton.click();
    await this.dealname.fill(dealname);
    await this.amount.fill(amount);
    await this.closedate.click();
    await this.savebut.click();


}





}