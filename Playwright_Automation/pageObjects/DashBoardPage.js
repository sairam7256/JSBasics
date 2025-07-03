import { expect} from '@playwright/test';
 class DashBoardPage {

    constructor(page) 
    {
        this.page = page;
        this.products = page.locator(".card-body");
        this.titles = page.locator(".card-body b");
        this.successMessage = page.locator("//*[contains(text(),'Product Added To Cart')]");
        this.cartLink = page.locator(".btn.btn-custom[routerlink='/dashboard/cart']")
        
    }
async searchAndAddToCart(productName)
{
    const products = await this.products;
        const titles= await this.titles.allTextContents();
        console.log(titles)
        const count =await this.products.count();
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
//module.exports = {DashBoardPage};
export { DashBoardPage };