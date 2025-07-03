import { expect,Page} from '@playwright/test';

export class OrderDetails {
    page: Page;



      constructor(page:Page) 
    {
        this.page = page;

    }
    
    async validateOrderIdinMyOrdersPage(orderId:any)
    {
            
            
            await this.page.waitForTimeout(1000);
            if(await this.page.locator("text = "+orderId).isVisible()){
                console.log("Order Id is found in summary page");
            }else{
                console.log("Order Id is NOT found in summary page");
            }
            expect (await this.page.locator("text = "+orderId).isVisible());
    }
}

module.exports = {OrderDetails};