exports.Loginpage = class loginpage{
        constructor(page){
            this.page = page;
            this.usernameinput = 'Work Email';
            this.passwordinput ='Password';
           

        }

        async gotologinpage(username, password) {
            await this.page.goto('https://app-dot-92-1-dot-accountbox-154605.appspot.com/login#marketing');
            await this.page.getByPlaceholder(this.usernameinput).fill(username);
            await this.page.getByPlaceholder(this.passwordinput).fill(password);
            await this.page.getByRole('button', { name: 'LogIn' }).click();
        
        }
    };





