const {test, expect} = require('@playwright/test');
const URLs = require('../URLs');

test("First testcase", async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage()
    const inputUsername = "#userEmail";
    const inputPassword = "#userPassword";
    const btnLogin = "#login";

    await page.goto(URLs.clientPageURL);
    await page.locator(inputUsername).fill('saitest123@gmail.com');
    await page.locator(inputPassword).fill('Routes66');
    await page.locator(btnLogin).click();
    //await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const allTitles = await page.locator(".card-body b").allTextContents();
    console.log(allTitles);
});


test("dropdown and radio button selections", async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage()
    

     await page.goto(URLs.loginPageURL);
     const dropdownValues = page.locator(".form-control[data-style='btn-info']");
     await dropdownValues.selectOption("Teacher");
     await page.locator(".radiotextsty").last().click();
     await expect (page.locator(".radiotextsty").last()).toBeChecked();
     await page.locator("#okayBtn").click();
     await page.locator("#terms").click();
     await expect(page.locator("#terms")).toBeChecked();
     await page.locator("#terms").uncheck();
     expect (await page.locator("#terms").isChecked()).toBeFalsy();
     await expect(page.locator (".blinkingText")).toHaveAttribute("target","_blank");

     
     //await page.pause();
    
});