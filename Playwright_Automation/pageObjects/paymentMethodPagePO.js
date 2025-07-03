import { expect} from '@playwright/test';
class PaymentMethodPage {

    constructor(page) 
    {
        this.page = page;
        this.selectCountry = page.locator("input[placeholder='Select Country']");
        this.countryDropdown = page.locator(".ta-results.list-group.ng-star-inserted");
        this.countryText = page.locator("//*[text()=' India']");
        this.labeltext = page.locator("label[type='text']");
        this.placeOrder = page.locator("//a[normalize-space()='Place Order']");
           
    }
async providePaymentDetailsAndPlaceOrder(userName)
{
     await this.selectCountry.pressSequentially('ind'); 
    
    
    const dropdown = await this.countryDropdown;
    await dropdown.waitFor();

    await this.countryText.click();

    await expect(this.labeltext).toHaveText(userName);
    await this.placeOrder.click();
}
}
//module.exports = {PaymentMethodPage};
export {PaymentMethodPage};