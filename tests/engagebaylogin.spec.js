import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/Loginpage';
import { Contacts } from '../pages/Contact';
import { Deal } from '../pages/dealcreate';
import { Task } from '../pages/Task';
import { Company } from '../pages/Company';
import { Ticket } from '../pages/Ticket';
import { Event1 } from '../pages/Event';

test.describe('EngageBay Tests', () => {
    
    test('Login Test', async ({ page }) => {
        const login = new Loginpage(page);
        
        await login.gotologinpage('akash123rvr@gmail.com', 'R@mu1234');

        // Assertion to verify successful login
        //await expect(page).toHaveURL(/dashboard/i); // Modify if necessary
    await page.waitForTimeout(5000);
        const deal1 = new Deal(page);
        await deal1.dealcreation('automation deal','1000');
        await page.waitForTimeout(5000);
    
       const task = new Task(page);
        await task.Taskcreate('roopa');
        await page.waitForTimeout(5000);
        

       
        const companies = new Company(page);
       await companies.companycreation('Anyone');
    
       await page.waitForTimeout(5000);
        



const ticket  = new Ticket(page);
await ticket.Ticketcreate('dmom3793@gmail.com', 'through playwright', 'I hope everything works fine');
await page.waitForTimeout(5000);


const event11 = new Event1(page);
await event11.BookEvent('autoevent');
await page.waitForTimeout(5000);



    });
});

   /* test('Contacts Navigation Test', async ({ page }) => {
        const login = new Loginpage(page);
        await login.gotologinpage('akash123rvr@gmail.com', 'R@mu1234');

        await page.waitForTimeout(5000); // Wait for login to complete

        const contact = new Contacts(page);
        await page.waitForTimeout(5000);
         await contact.openMarketingModule('hanuman1','hanuma1n@gmail.com');
         await page.waitForTimeout(5000);
    

    
        // Assertion to verify successful navigation
        //await expect(page).toHaveURL(/contacts/i); // Modify if necessary
    });
    */

