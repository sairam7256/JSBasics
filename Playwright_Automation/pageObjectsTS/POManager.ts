//import  URLs from'../URLs';
import { Page } from '@playwright/test';
import {LoginPage} from '../pageObjectsTS/loginCartPagePO';
import {DashBoardPage} from '../pageObjectsTS/dashBoardPgePO';
import  {CartPage}  from '../pageObjectsTS/cartPagePO'
import {PaymentMethodPage} from '../pageObjectsTS/paymentMethodPagePO'
import {OrderSuccessPage} from '../pageObjectsTS/orderSuccessPagePO'
import  {MyOrdersPO}  from '../pageObjectsTS/MyOrdersPO'
import  {OrderDetails}  from '../pageObjectsTS/OrderDetailsPage'
export class POManager {
    page: Page;
    loginPage: LoginPage;
    dashboard: DashBoardPage;
    cartPage : CartPage;
    paymentMethodPage :PaymentMethodPage;
    orderSuccessPage : OrderSuccessPage;
    MyOrdersPage :MyOrdersPO;
    MyOderDetailsPage : OrderDetails;

    constructor(page:Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboard = new DashBoardPage(this.page)
        this.cartPage = new CartPage(this.page)
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
    return this.dashboard
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
