import { expect} from '@playwright/test';
class CartPage {

    constructor(page) 
    {
        this.page = page;
        this.list = page.locator("div li");
        
        this.checkOut = page.locator("li[class='totalRow'] button[type='button']");
       
        
    }
async verifyAndCheckout(productName)
{
    await this.list.first().waitFor();
    this.productText = this.page.locator("h3:has-text('"+productName+"')");
        const bool = await this.productText.isVisible();
        expect (bool).toBeTruthy();
        await this.checkOut.click();
}
}
//module.exports = {CartPage};
export {CartPage};