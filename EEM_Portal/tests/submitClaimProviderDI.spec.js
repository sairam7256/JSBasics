const {test,expect} = require('@playwright/test');
const { link } = require('fs');
//const { only } = require('node:test');

const url = "https://cigna-im--cimsit.sandbox.my.site.com/CustomLogin";

test('submit claim for provider of DI', async ({page})=>{

  const inputUserName = page.locator("//input[@id='okta-signin-username']");
  const inputPassword = page.locator("//input[@id='okta-signin-password']");
  const btnLogin = page.locator("//input[@id='okta-signin-submit']");
  //const textLoggedinMessage = page.locator("//h1[contains(text(),'Hi ')]");
  const btnAcceptCookies = page.locator("//*[text()='Accept All Cookies']");

  await page.goto(url);
  await page.waitForTimeout(2000);
  await btnAcceptCookies.click();
  await inputUserName.fill('20015907501');
  await inputPassword.fill('Routes66');
  await btnLogin.click();
  await page.locator(".claim-btn").click(); // new claim btn

  // new claim flow
  await page.locator('div:nth-child(6) > vlocity_ins-block > div').first().click(); // tile
  await page.locator("button[title='Continue']").click(); // continue of add contact
  await page.getByRole('combobox', { name: 'Select a country/area*' }).click(); // click country combobox
  await page.getByRole('combobox', { name: 'Select a country/area*' }).fill('india');// type in country combobox
  await page.getByText('INDIA', { exact: true }).click(); //select from dropdown box
  await page.locator("button[title='Continue']").click(); // continue of country page

  await page.getByRole('combobox', { name: 'Is it an outpatient or inpatient stay? *'}).click();
  await page.getByText('Inpatient', { exact: true }).click(); //select from dropdown box
  await page.locator("button[title='Continue']").click(); // continue of country page


}
)