const {test,expect} = require('@playwright/test');
const { only } = require('node:test');

const url = "https://cigna-im--cimsit.sandbox.my.site.com/CustomLogin";

test('First portal test', async ({page})=>{

  const inputUserName = page.locator("//input[@id='okta-signin-username']");
  const inputPassword = page.locator("//input[@id='okta-signin-password']");
  const btnLogin = page.locator("//input[@id='okta-signin-submit']");
  const textLoggedinMessage = page.locator("//h1[contains(text(),'Hi ')]");
  const btnAcceptCookies = page.locator("//*[text()='Accept All Cookies']");

  await page.goto(url);
  await page.waitForTimeout(2000);
  await btnAcceptCookies.click();
  await inputUserName.fill('85804268501');
  await inputPassword.fill('Routes66');
  await btnLogin.click();
  await page.waitForTimeout(5000);
  let loggedInMessage = await textLoggedinMessage.textContent();
  if(loggedInMessage){
    //pass
    console.log("Successfully logged in: "+loggedInMessage);
  }else{
    //fail
    console.log("logged Failed");
  }
  // await page.screenshot();
});

test('Cigna Login Failure test', async ({page})=>{
  await page.goto("https://cigna-im--cimsit.sandbox.my.site.com/CustomLogin")
  await page.waitForTimeout(2000);
  await page.locator("//*[text()='Accept All Cookies']").click();
  await page.locator("//input[@id='okta-signin-username']").fill('85804268501');
  await page.locator("//input[@id='okta-signin-password']").fill('127096');
  await page.locator("//input[@id='okta-signin-submit']").click();
  await expect(page.locator("//p[contains(text(),'Your Cigna ID and password does not match our reco')]")).toBeVisible();
});
