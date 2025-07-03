import { expect, Locator, Page} from '@playwright/test';

 class MyOrdersPO {
    page :  Page;
    MyOrdersPage : Locator;


    constructor(page:Page) 
    {
        this.page = page;
        this.MyOrdersPage = page.locator("//button[@routerlink='/dashboard/myorders']");

        

    }

    async validateOrderIdinMyOrdersPage(orderId:any)
    {
        await this.MyOrdersPage.click();
        await this.page.waitForTimeout(1000);
            if(await this.page.locator("text = "+orderId).isVisible()){
                console.log("Order Id is found in orders page");
            }else{
                console.log("Order Id is NOT found in orders page");
            }
            // }
            
            expect (await this.page.locator("text = "+orderId).isVisible());
            
            await this.page.locator("//th[normalize-space()='"+orderId+"']/parent::tr//*[text()='View']").click();
           
    }
}
export {MyOrdersPO};