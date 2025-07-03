
import {test, expect,request } from '@playwright/test';

//import {APiUtils} from '../utils_JS/APiUtils';
//const loginPayLoad = {userEmail:"saitest123@gmail.com",userPassword:"Routes66"};
//const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"67a8dde5c0d3e6622a297cc8"}]};
 
 
let response;
let webcontext;
test.beforeAll( async({browser})=>
{
   
        // const context = await browser.newContext();
        // const page = await context.newPage()
        // const inputUsername = "#userEmail";
        // const inputPassword = "#userPassword";
        // const btnLogin = "#login";
    
        // //await page.goto(URLs.clientPageURL);
        // await page.goto("https://rahulshettyacademy.com/client");
        // await page.locator(inputUsername).fill('saitest123@gmail.com');
        // await page.locator(inputPassword).fill('Routes66');
        
        // await page.locator(btnLogin).click();
        // await page.waitForLoadState('networkidle');
        // await context.storageState({path : 'state.json'}); //store session data in this file
        webcontext = await browser.newContext({storageState : 'state.json'}); //sending session data to new context

 
});


test("First testcase web api part two", async ({})=>{

    // const context = await browser.newContext();
    // const page = await context.newPage()
    // const email = 'saitest123@gmail.com'
    // const inputUsername = "email@example.com";
    // const inputPassword = "enter your passsword";
    // //const btnLogin = "Login";

    // await page.goto(URLs.clientPageURL);
    const page = await webcontext.newPage()
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator(".card-body").filter({hasText: 'ZARA COAT 3'}).getByRole("button", {name: " Add To Cart"}).click();
    page.waitForTimeout(500);
    await page.getByRole("listitem").getByRole("button",{name: "Cart"}).click();


    
  
    await page.locator("div li").first().waitFor(); 
    const bool = await page.getByText("ZARA COAT 3").isVisible();
    expect (bool).toBeTruthy();
    await page.getByRole("button",{name: "Checkout"}).click();


    await page.getByPlaceholder("Select Country").pressSequentially('ind'); 
    await page.getByRole("button",{name: "India"}).nth(1).click();
    
    

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

    //expect (page.locator("label[type='text']")).toHaveText(email);
    await page.getByText("Place Order ").click();

    //end here as of now 

    // console.log(await page.locator(".hero-primary").textContent());
    // expect (await page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    // let orderId=await page.locator("label[class='ng-star-inserted']").textContent();
    // orderId = orderId.split('|')[1].trim();
    // console.log(orderId);

    // //checking the order id in orders page
    // await page.locator("//button[@routerlink='/dashboard/myorders']").click();
    // let pagesCount =3
    // // if(pagesCount>1){
    // //     for(let i=1;i<=pagesCount;i++){
    // //         if(await page.locator("text = "+orderId).isVisible()){
    // //             console.log("Order Id is found in orders page"+i);
    // //             break;
    // //         }else{
    // //         console.log("Order Id is NOT found in orders page"+i);
    // //         await page.locator("text = "+i+1).click(); //going to next page
    // //         }
    // //     }
    // // }else{
    // await page.waitForTimeout(1000);
    // if(await page.locator("text = "+orderId).isVisible()){
    //     console.log("Order Id is found in orders page");
    // }else{
    //     console.log("Order Id is NOT found in orders page");
    // }
    // // }
    
    // expect (await page.locator("text = "+orderId).isVisible());
    // await page.locator("//th[normalize-space()='"+orderId+"']/parent::tr//*[text()='View']").click();
    // await page.waitForTimeout(1000);
    // if(await page.locator("text = "+orderId).isVisible()){
    //     console.log("Order Id is found in summary page");
    // }else{
    //     console.log("Order Id is NOT found in summary page");
    // }
    // expect (await page.locator("text = "+orderId).isVisible());

    // await page.pause();
    


}
)