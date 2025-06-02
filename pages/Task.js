exports.Task = class Createtask{
constructor(page){
this.page = page;
this.module = page.getByRole('button', { name: 'Marketing' });
this.salesmodule = page.locator("(//span[normalize-space()='Sales'])[1]");
this.tasktab = page.locator("(//a[contains(text(),'Tasks')])[1]");
this.newtask = page.locator("(//a[normalize-space()='Create Task'])[1]");
this.taskname = page.locator("(//input[@placeholder='Task name'])[1]");
this.duedate  = page.locator("(//input[@id='closed-date'])[1]");
this.savebutt = page.locator("(//button[@type='submit'])[1]");


}
async Taskcreate(taskname){
await this.module.click();
await this.salesmodule.click();
await this.tasktab.click();
await this.newtask.click();
await this.taskname.fill(taskname);
await this.duedate.click();
await this.savebutt.click();



}






}


