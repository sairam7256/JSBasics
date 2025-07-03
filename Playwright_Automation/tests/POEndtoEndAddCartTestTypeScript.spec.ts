
import {customTest} from '../utils_TS/test-base';
import {test, expect} from '@playwright/test';
//import URLs from '../URLs';
//import { count } from 'console' ;
import {POManager} from '../pageObjectsTS/POManager';
// const {LoginPage} = require('../pageObjectsTSloginCartPagePO')
// const {DashBoardPage} = require('../pageObjectsTS/dashBoardPgePO');
// const { CartPage } = require('../pageObjectsTS/cartPagePO');
// const {PaymentMethodPage} = require ('../pageObjectsTS/paymentMethodPagePO')
// const {OrderSuccessPage} = require ('../pageObjectsTS/orderSuccessPagePO');
//json-> string ->js object
//const dataset = JSON.parse(JSON.stringify(require ('../utils_TS/placeOrderDataSet.json') ))
import rawdataset from '../utils_TS/placeOrderDataSet.json';

const dataset = JSON.parse(JSON.stringify(rawdataset));
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
    const orderId : any = await orderSuccessPage.verifySuccessMessageAndOrderID(); //getting order id 
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
