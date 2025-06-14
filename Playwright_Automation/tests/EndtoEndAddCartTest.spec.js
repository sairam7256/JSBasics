const {test, expect} = require('@playwright/test');
const URLs = require('../URLs');
const { count } = require('console');

test("First testcase", async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage()
    const email = 'saitest123@gmail.com'
    const inputUsername = "#userEmail";
    const inputPassword = "#userPassword";
    const btnLogin = "#login";

    await page.goto(URLs.clientPageURL);
    const produtName = 'IPHONE 13 PRO';
    await page.locator(inputUsername).fill(email);
    await page.locator(inputPassword).fill('Routes66');
    await page.locator(btnLogin).click();
    await page.waitForTimeout(2000);
    const products = await page.locator(".card-body")
    const titles= await page.locator(".card-body b").allTextContents();
    console.log(titles)
    const count =await products.count();
  console.log(count);

    for (let i=0; i < count ; i++)
    {
        if ( await products.nth(i).locator("b").textContent() == produtName  )
        {
            await products.nth(i).locator("text = Add To Cart").click();
            break;
        }

    }
    
    page.waitForTimeout(500);
    console.log(await page.locator("//*[contains(text(),'Product Added To Cart')]").innerText());
    await expect(await page.locator("//*[contains(text(),'Product Added To Cart')]")).toContainText("Product Added To Cart")
    await page.locator(".btn.btn-custom[routerlink='/dashboard/cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
    expect (bool).toBeTruthy();
    await page.locator("li[class='totalRow'] button[type='button']").click();
    await page.locator("input[placeholder='Select Country']").pressSequentially('ind'); 
    
    
    const dropdown = await page.locator(".ta-results.list-group.ng-star-inserted");
    await dropdown.waitFor();

    await page.locator("//*[text()=' India']").click()

    // let OptionsCount =await dropdown.locator("button").count();
    // console.log(OptionsCount);

    // for (let i=0; i < OptionsCount ; i++)
    // {
    //     let text = await dropdown.locator("button").nth(i).textContent();
    //     if (text === ' India' )
    //     {
    //         await dropdown.locator("button").nth(i).click();
    //         break;
    //     }


    // }

    expect (page.locator("label[type='text']")).toHaveText(email);
    await page.locator("//a[normalize-space()='Place Order']").click();
    console.log(await page.locator(".hero-primary").textContent());
    expect (await page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    let orderId=await page.locator("label[class='ng-star-inserted']").textContent();
    orderId = orderId.split('|')[1].trim();
    console.log(orderId);

    //checking the order id in orders page
    await page.locator("//button[@routerlink='/dashboard/myorders']").click();
    let pagesCount =3
    // if(pagesCount>1){
    //     for(let i=1;i<=pagesCount;i++){
    //         if(await page.locator("text = "+orderId).isVisible()){
    //             console.log("Order Id is found in orders page"+i);
    //             break;
    //         }else{
    //         console.log("Order Id is NOT found in orders page"+i);
    //         await page.locator("text = "+i+1).click(); //going to next page
    //         }
    //     }
    // }else{
    await page.waitForTimeout(1000);
    if(await page.locator("text = "+orderId).isVisible()){
        console.log("Order Id is found in orders page");
    }else{
        console.log("Order Id is NOT found in orders page");
    }
    // }
    
    expect (await page.locator("text = "+orderId).isVisible());
    await page.locator("//th[normalize-space()='"+orderId+"']/parent::tr//*[text()='View']").click();
    await page.waitForTimeout(1000);
    if(await page.locator("text = "+orderId).isVisible()){
        console.log("Order Id is found in summary page");
    }else{
        console.log("Order Id is NOT found in summary page");
    }
    expect (await page.locator("text = "+orderId).isVisible());

    await page.pause();
    


}
)