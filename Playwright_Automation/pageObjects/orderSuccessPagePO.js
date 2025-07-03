import { expect} from '@playwright/test';
class OrderSuccessPage {

    constructor(page) 
    {
        this.page = page;
        this.sucessMessageThanks = page.locator(".hero-primary");
        this.orderID = page.locator("label[class='ng-star-inserted']");
        this.ordersPage = page.locator("//button[@routerlink='/dashboard/myorders']");
    
           
    }
async verifySuccessMessageAndOrderID()
{
     console.log(await this.sucessMessageThanks.textContent());
    expect (await this.sucessMessageThanks).toHaveText(" Thankyou for the order. ");
    let orderId=await this.orderID.textContent();
    orderId = orderId.split('|')[1].trim();
    console.log(orderId);

    //checking the order id in orders page
    await this.ordersPage.click();
    return orderId;
}
}
//module.exports = {OrderSuccessPage};
export {OrderSuccessPage};