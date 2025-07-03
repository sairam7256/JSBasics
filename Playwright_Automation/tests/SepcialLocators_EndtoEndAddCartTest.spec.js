// const {test, expect} = require('@playwright/test');
// const URLs = require('../URLs');
// const { count } = require('console');
import { test, expect } from '@playwright/test';
import URLs from '../URLs.js';
import { count } from 'console';

test("First testcase with special locators of playwright", async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage()
    const email = 'saitest123@gmail.com'
    const inputUsername = "email@example.com";
    const inputPassword = "enter your passsword";
    //const btnLogin = "Login";

    await page.goto(URLs.clientPageURL);
    const produtName = 'IPHONE 13 PRO';
    await page.getByPlaceholder(inputUsername).fill(email);
    await page.getByPlaceholder(inputPassword).fill('Routes66');
    await page.getByRole("button",{name: "Login"}).click();
    await page.waitForTimeout(2000);
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

    expect (page.locator("label[type='text']")).toHaveText(email);
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