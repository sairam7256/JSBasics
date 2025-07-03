import { expect, Locator, Page} from '@playwright/test';
export class DashBoardPage {
    page : Page;
    products : Locator;
    titles : Locator;
    successMessage : Locator;
    cartLink : Locator;

    constructor(page:Page) 
    {
        this.page = page;
        this.products = page.locator(".card-body");
        this.titles = page.locator(".card-body b");
        this.successMessage = page.locator("//*[contains(text(),'Product Added To Cart')]");
        this.cartLink = page.locator(".btn.btn-custom[routerlink='/dashboard/cart']")
        
    }
async searchAndAddToCart(productName:string)
{
    //const products = await this.products;
        const titles:string[]= await this.titles.allTextContents();
        console.log(titles)
        const count:number =await this.products.count();
      console.log(count);
    
        for (let i=0; i < count ; i++)
        {
            if ( await this.products.nth(i).locator("b").textContent() == productName  )
            {
                await this.products.nth(i).locator("text = Add To Cart").click();
                break;
            }
    
        }
        
        this.page.waitForTimeout(500);
        console.log(await this.successMessage.innerText());
        await expect(await this.successMessage).toContainText("Product Added To Cart");
        await this.cartLink.click();
}
}
module.exports = {DashBoardPage};