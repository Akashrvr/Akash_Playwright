exports.Ticket = class CreateTicket{
constructor(page){
    this.page =page;
    this.module = page.getByRole('button', { name: 'Marketing' });
    this.service = page.locator("//span[normalize-space()='Service']");
    this.Tickettab = page.locator("(//a[@class='nav-link'][normalize-space()='Tickets'])[1]");
    this.new = page.locator("//span[normalize-space()='Create New']");
    //this.new = page.getByRole('link', { name: 'Create New' });
    this.tomail = page.locator("(//input[@id='contactSelectChosenAccount'])[2]");
    this.subject = page.locator("(//input[@name='subject'])[1]");
    this.assigne = page.locator("(//select[@id='ticketAssigneeAndGroup'])[1]");
    this.assignegroup = page.locator("//option[@value='5430056823554048']");
    this.messageframe = page.frameLocator("//iframe[@id='createTicketMessageEditor_ifr']");
    this.messagebody = this.messageframe.locator("//body");
    this.save = page.locator("(//button[normalize-space()='Submit'])[1]");


}
async Ticketcreate(email, subject, msg){
    await this.module.click();
    await this.service.click();
    await this.Tickettab.click();
    await this.new.click();
    await this.tomail.fill(email)
    await this.tomail.press('Enter');
    await this.subject.fill(subject);
    await this.assigne.click();
    //await this.assignegroup.waitFor({ state: 'visible' });
    await this.assignegroup.click();
    await this.messagebody.click();
    await this.messagebody.fill(msg);
    await this.save.click();




}
}