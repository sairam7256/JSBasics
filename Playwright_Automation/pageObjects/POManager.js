// const URLs = require('../URLs');

// const {LoginPage} = require('../pageObjects/loginCartPagePO')
// const {DashBoardPage} = require('../pageObjects/DashBoardPage');
// const { CartPage } = require('../pageObjects/cartPagePO');
// const {PaymentMethodPage} = require ('../pageObjects/paymentMethodPagePO')
// const {OrderSuccessPage} = require ('../pageObjects/orderSuccessPagePO');
// const { MyOrdersPO } = require('../pageObjects/MyOrdersPO');
// const { OrderDetails } = require('../pageObjects/OrderDetailsPage');


import URLs from '../URLs.js';

import { LoginPage } from '../pageObjects/loginCartPagePO.js';
import { DashBoardPage } from '../pageObjects/DashBoardPage.js';
import { CartPage } from '../pageObjects/cartPagePO.js';
import { PaymentMethodPage } from '../pageObjects/paymentMethodPagePO.js';
import { OrderSuccessPage } from '../pageObjects/orderSuccessPagePO.js';
import { MyOrdersPO } from '../pageObjects/MyOrdersPO.js';
import { OrderDetails } from '../pageObjects/OrderDetailsPage.js';
class POManager {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.DashBoardPage = new DashBoardPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.paymentMethodPage = new PaymentMethodPage(this.page);
        this.orderSuccessPage = new OrderSuccessPage(this.page);
        this.MyOrdersPage = new MyOrdersPO(this.page);
        this.MyOderDetailsPage = new OrderDetails(this.page)

    }
async getLoginPage()
{
   return this.loginPage;
}
async getDashboardPage()
{
    return this.DashBoardPage
}
async getCartPage()
{
    return this.cartPage
}
async getPaymentPage()
{
    return this.paymentMethodPage
}
async getOrderSuccessPage()
{
    return this.orderSuccessPage
}
async getMyOrdersPage()
{
    return this.MyOrdersPage;
}
async getMyOrderDetails()
{
    return this.MyOderDetailsPage
}



}
export {POManager};