import { expect} from '@playwright/test';
 class MyOrdersPO {

    constructor(page) 
    {
        this.page = page;
        this.MyOrdersPage = page.locator("//button[@routerlink='/dashboard/myorders']");

        

    }

    async validateOrderIdinMyOrdersPage(orderId)
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
//module.exports = {MyOrdersPO};
export { MyOrdersPO };