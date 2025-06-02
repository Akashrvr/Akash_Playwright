import { test } from '@playwright/test';
import { Loginpage } from '../pages/Loginpage';
import { Contacts } from '../pages/Contact';
import { Deal } from '../pages/dealcreate';
import { Task } from '../pages/Task';
import { Company } from '../pages/Company';
import { Ticket } from '../pages/Ticket';
import { Event1 } from '../pages/Event';


let page;
test.describe('CRM', ()=>{

    //Login test
    test.beforeAll(async({browser})=>{
        page = await browser.newPage();
        const login = new Loginpage(page);
        await login.gotologinpage('akash123rvr@gmail.com','R@mu1234');

    })

    //Contact create
    test('Contacts Navigation Test', async () => {
        const contact = new Contacts(page)
        await page.waitForTimeout(5000);
         await contact.openMarketingModule('ROOY','rooy@gmail.com');
         await page.waitForTimeout(5000);
        // Assertion to verify successful navigation
        //await expect(page).toHaveURL(/contacts/i); // Modify if necessary
    })

    //company create
    test('company', async()=>{
        const companies = new Company(page);
        await companies.companycreation('pepe');
        await page.waitForTimeout(5000);

    })

    //Deal create
    test('deal',async()=>{
        const deal1 = new Deal(page);
        await deal1.dealcreation('automedation deal2','50');
        await page.waitForTimeout(5000);

    })

    //Task create
    test ('task', async()=>{
        const task = new Task(page);
        await task.Taskcreate('rooedpa2');
        await page.waitForTimeout(5000);

    })

    //Event crreate
    test('Event',async()=>{
        const event11 = new Event1(page);
        await event11.BookEvent('autoevent');
        await page.waitForTimeout(5000);

    })

    //Ticket create
    test('Ticket',async()=>{
        const ticket  = new Ticket(page);
        await ticket.Ticketcreate('dmom3793@gmail.com', 'through play tgf wfdright', 'I hope everytheeing works fine');
        await page.waitForTimeout(5000);

    })

    

})





































