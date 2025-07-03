const {test,expect} = require('@playwright/test');
const { link } = require('fs');
const { only } = require('node:test');

const url = "https://cigna-im--cimsit.sandbox.my.site.com/CustomLogin";

test('First portal test', async ({page})=>{

  const inputUserName = page.locator("//input[@id='okta-signin-username']");
  const inputPassword = page.locator("//input[@id='okta-signin-password']");
  const btnLogin = page.locator("//input[@id='okta-signin-submit']");
  //const textLoggedinMessage = page.locator("//h1[contains(text(),'Hi ')]");
  const btnAcceptCookies = page.locator("//*[text()='Accept All Cookies']");

  await page.goto(url);
  await page.waitForTimeout(2000);
  await btnAcceptCookies.click();
  await inputUserName.fill('85804268501');
  await inputPassword.fill('Routes66');
  await btnLogin.click();
  //await page.waitForTimeout(10000);
  await page.locator("//a[normalize-space()='Account']").click();  // account link 
  //await page.waitForTimeout(20000);
  await page.locator("//strong[@class='ng-binding'][normalize-space()='Communication Preferences']").click(); //comm. pref. link
  await page.locator("#EmailAddressEditable").fill("sairam.karakotenagekar@cignahealthcare.com");
  await page.getByText("Update Preferences").click();
  await expect (page.getByText("Communication preferences update")).toBeVisible();

  

}
)