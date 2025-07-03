import { expect} from '@playwright/test';

 class OrderDetails {


      constructor(page) 
    {
        this.page = page;

    }
    
    async validateOrderIdinMyOrdersPage(orderId)
    {
            
            
            await page.waitForTimeout(1000);
            if(await page.locator("text = "+orderId).isVisible()){
                console.log("Order Id is found in summary page");
            }else{
                console.log("Order Id is NOT found in summary page");
            }
            expect (await page.locator("text = "+orderId).isVisible());
    }
}

//module.exports = {OrderDetails};
export { OrderDetails };