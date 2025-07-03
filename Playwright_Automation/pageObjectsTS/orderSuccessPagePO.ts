import {Page, expect, Locator} from '@playwright/test';
class OrderSuccessPage {
    page: Page;
    sucessMessageThanks : Locator;
    orderID : Locator;
    ordersPage : Locator;

    constructor(page:Page) 
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
    
    const rawOrderId:string | null =await this.orderID.textContent();

    let orderId: string;

    if (rawOrderId !== null) {
    orderId = rawOrderId.split('|')[1].trim();
    } else {
    orderId = "order id not found"; // or throw an error
    }


    // let orderId:string | null =await this.orderID.textContent();
    // orderId = orderId.split('|')[1].trim();
    console.log(orderId);

    //checking the order id in orders page
    await this.ordersPage.click();
    return orderId;
}
}
export {OrderSuccessPage};