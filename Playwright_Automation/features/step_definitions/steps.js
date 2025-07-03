// // const {Given,When, Then} = require('@cucumber/cucumber')
// // const {POManager} = require('../../pageObjects/POManager')
// // const {test, expect,playwright} = require('@playwright/test');
// // const { chromium } = require('playwright');

// import { Given, When, Then } from '@cucumber/cucumber';
// import { POManager } from '../../pageObjects/POManager.js';
// //import { test, expect, playwright } from '@playwright/test';
// import { test, expect } from '@playwright/test';
// import playwright from 'playwright'; 

// import { chromium } from 'playwright';
  
// Given('a login to Ecommerce app with {string} and {string}', async function (userName, password) {
//            // Write code here that turns the phrase above into concrete actions
//            //const browser = await playwright.chromium.launch();
//            const browser = await chromium.launch();
//            const context = await browser.newContext();
//            const page = await context.newPage();
//            this.poManager = new POManager(page);
//            const loginPage = await this.poManager.getLoginPage();
//             await loginPage.goto();
//             await loginPage.validateLogin(userName,password)
//          });

//  When('Add {string} product to cart', async function (productName) {
//            // Write code here that turns the phrase above into concrete actions
//            this.dashboard = await poManager.getDashboardPage();
//              await this.dashboard.searchAndAddToCart(productName);
//          }); 

//  Then('Verify {string} is displayed in the cart',async  function (productName) {
//            // Write code here that turns the phrase above into concrete actions
//             this.cartPage = await this.poManager.getCartPage();
//             await this.cartPage.verifyAndCheckout(productName);
//          });

//  When('Enter the valid details and place order',async function (userName) {
//            // Write code here that turns the phrase above into concrete actions
           
//     const paymentMethodPage = await poManager.getPaymentPage()
//     await paymentMethodPage.providePaymentDetailsAndPlaceOrder(userName);
//          });

// Then('Verify order is present in the orderhistory', async function () {
//            // Write code here that turns the phrase above into concrete actions
//              const orderSuccessPage = await poManager.getOrderSuccessPage();
//     const orderId = await orderSuccessPage.verifySuccessMessageAndOrderID(); //getting order id 
//     const MyOrdersPage = await poManager.getMyOrdersPage();
//     await MyOrdersPage.validateOrderIdinMyOrdersPage(orderId);
//          });

import { Given, When, Then } from '@cucumber/cucumber';
import { POManager } from '../../pageObjects/POManager.js';
import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

Given(
  'a login to Ecommerce app with {string} and {string}', 
  { timeout: 20000 }, // increase timeout to 20 seconds
  async function (userName, password) {
    // const browser = await chromium.launch({ headless: false }); // set headless: false if you want to see browser during debugging
    // const context = await browser.newContext();
    // const page = await context.newPage();

    this.poManager = new POManager(this.page);
    const loginPage = await this.poManager.getLoginPage();

    await loginPage.goto();
    await loginPage.validateLogin(userName, password);
  }
);

When('Add {string} product to cart', async function (productName) {
  this.dashboard = await this.poManager.getDashboardPage();
  await this.dashboard.searchAndAddToCart(productName);
});

Then('Verify {string} is displayed in the cart', async function (productName) {
  this.cartPage = await this.poManager.getCartPage();
  await this.cartPage.verifyAndCheckout(productName);
});

When('Enter the valid details and place order', async function () {
  const paymentMethodPage = await this.poManager.getPaymentPage();
  await paymentMethodPage.providePaymentDetailsAndPlaceOrder("saitest123@gmail.com");
});

Then('Verify order is present in the orderhistory', async function () {
  const orderSuccessPage = await this.poManager.getOrderSuccessPage();
  const orderId = await orderSuccessPage.verifySuccessMessageAndOrderID();
  const myOrdersPage = await this.poManager.getMyOrdersPage();
  await myOrdersPage.validateOrderIdinMyOrdersPage(orderId);
});


         Given('a login to a website app with {string} and {string}', async function (username, password) {
           // Write code here that turns the phrase above into concrete actions
            // const context = await browser.newContext();
            //    const page = await context.newPage()
    //            let inputUsername = "//input[@id='username']";
    //            let inputPassword = "//input[@id='password']";
    //            let  btnLogin = "//input[@id='signInBtn']";
           
    //            await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //            console.log(await this.page.title());
    //            await expect(this.page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    //            await this.page.locator(inputUsername).fill("rahulshettyacademy")
    // await this.page.locator(inputPassword).fill("learning1")
    // await this.page.locator(btnLogin).click()

     const usernameSelector = "//input[@id='username']";
    const passwordSelector = "//input[@id='password']";
    const loginButtonSelector = "//input[@id='signInBtn']";

    // Navigation
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await this.page.title());
    await expect(this.page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

    // Actions
    await this.page.locator(usernameSelector).fill(username);
    await this.page.locator(passwordSelector).fill(password);
    await this.page.locator(loginButtonSelector).click();

         });



         Then('Verify error message', async function () {
           // Write code here that turns the phrase above into concrete actions
           console.log ( await this.page.locator("[style*='block']").textContent() );
    await expect(await this.page.locator("[style*='block']")).toContainText("Incorrect");
         });