// const {customTest} = require('../utils_JS/test-base')
// const {test, expect} = require('@playwright/test');
// const URLs = require('../URLs');
// const { count } = require('console');
// const {POManager} = require('../pageObjects/POManager')
import { customTest } from '../utils_JS/test-base.js';
import { test, expect } from '@playwright/test';
import URLs from '../URLs.js';
import { count } from 'console';
import { POManager } from '../pageObjects/POManager.js';
// const {LoginPage} = require('../pageObjects/loginCartPagePO')
// const {DashBoardPage} = require('../pageObjects/dashBoardPgePO');
// const { CartPage } = require('../pageObjects/cartPagePO');
// const {PaymentMethodPage} = require ('../pageObjects/paymentMethodPagePO')
// const {OrderSuccessPage} = require ('../pageObjects/orderSuccessPagePO');
//json-> string ->js object
//const dataset = JSON.parse(JSON.stringify(require('../utils_JS/placeOrderDataSet.json')))
import dataset from '../utils_JS/placeOrderDataSet.json' assert { type: 'json' };
for(const data of dataset) // adding for loop fror running tests for two datasets
{
test(`@Web E2E adding product to carts for ${data.productName}`, async ({browser})=>{    // addng test name in order not to duplicate names while repeating test for two data sets  

    const context = await browser.newContext();
    const page = await context.newPage();
    const poManager = new POManager(page);
   
    
    const loginPage = await poManager.getLoginPage();
    await loginPage.goto();
    await loginPage.validateLogin(data.userName,data.password)

    const dashboard = await poManager.getDashboardPage();
    await dashboard.searchAndAddToCart(data.productName);

    const cartPage = await poManager.getCartPage();
    await cartPage.verifyAndCheckout(data.productName);

    const paymentMethodPage = await poManager.getPaymentPage()
    await paymentMethodPage.providePaymentDetailsAndPlaceOrder(data.userName);
    
    const orderSuccessPage = await poManager.getOrderSuccessPage();
    const orderId = await orderSuccessPage.verifySuccessMessageAndOrderID(); //getting order id 
    const MyOrdersPage = await poManager.getMyOrdersPage();
    await MyOrdersPage.validateOrderIdinMyOrdersPage(orderId);
// 


    
   
  

    
    //let pagesCount =3
    // if(pagesCount>1){
    //     for(let i=1;i<=pagesCount;i++){
    //         if(await page.locator("text = "+orderId).isVisible()){
    //             console.log("Order Id is found in orders page"+i);
    //             break;
    //         }else{
    //         console.log("Order Id is NOT found in orders page"+i);
    //         await page.locator("text = "+i+1).click(); //going to next page
    //         }
    //     }


}
)
}


customTest('E2E test using custom dataset', async ({browser,testDataforOrder1})=>{    // addng test name in order not to duplicate names while repeating test for two data sets  

    const context = await browser.newContext();
    const page = await context.newPage();
    const poManager = new POManager(page);
   
    
    const loginPage = await poManager.getLoginPage();
    await loginPage.goto();
    await loginPage.validateLogin(testDataforOrder1.userName,testDataforOrder1.password)
    const dashboard = await poManager.getDashboardPage();
    await dashboard.searchAndAddToCart(testDataforOrder1.productName);
    const cartPage = await poManager.getCartPage();
    await cartPage.verifyAndCheckout(testDataforOrder1.productName);
    const paymentMethodPage = await poManager.getPaymentPage()
    await paymentMethodPage.providePaymentDetailsAndPlaceOrder(testDataforOrder1.userName);
    const orderSuccessPage = await poManager.getOrderSuccessPage();
    const orderId = await orderSuccessPage.verifySuccessMessageAndOrderID(); //getting order id 
    const MyOrdersPage = await poManager.getMyOrdersPage();
    await MyOrdersPage.validateOrderIdinMyOrdersPage(orderId);


}
)
