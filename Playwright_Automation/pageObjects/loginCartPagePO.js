
//const URLs = require('../URLs');
import URLs from '../URLs.js';

class LoginPage {

    constructor(page) {
        this.page = page;
        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.loginbtn = page.locator("#login");
    }
async validateLogin(userName,password)
{
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.loginbtn.click();
    await this.page.waitForTimeout(2000);
}
async goto()
    {
        await this.page.goto(URLs.clientPageURL);
    }
}

export {LoginPage};