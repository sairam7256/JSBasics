import { expect, Page,Locator} from '@playwright/test';
export class PaymentMethodPage {

    page : Page ;
    selectCountry : Locator ;
    countryDropdown : Locator ;
    countryText : Locator;
    labeltext : Locator ;
    placeOrder : Locator;


    constructor(page:Page) 
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

    expect (await this.labeltext).toHaveText(userName);
    await this.placeOrder.click();
}
}
