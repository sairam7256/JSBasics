import { expect, Locator, Page} from '@playwright/test';
import {URLs} from '../URLs.js';

 class LoginPage {
    page : Page;
    userName : Locator ;
    password : Locator;
    loginbtn : Locator;


    constructor(page:Page) {
        this.page = page;
        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.loginbtn = page.locator("#login");
    }
async validateLogin(userName:string,password:string)
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