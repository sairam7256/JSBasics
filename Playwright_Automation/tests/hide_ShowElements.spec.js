const {test, expect} = require('@playwright/test');
const URLs = require('../URLs');

test("show or hide elements test", async ({page})=>
{
    await page.goto(URLs.HideShowURL);
    await page.goto("https://www.google.com/"); //it will go this website in the same tab
    await page.goBack(); // it will go back to previous page
    await page.goForward() ; // it will go to forward page
    await page.goBack(); 

    await expect (await page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect (await page.locator("#displayed-text")).toBeHidden();
   

    await page.locator("#confirmbtn").click();
    await page.on("dialog",dailog => dailog.accept()); // to accept the popup
    await page.locator("#confirmbtn").click();
    await page.on("dialog",dailog => dailog.dismiss()); // to reject the popup
    await page.pause();
    await page.locator("#mousehover").hover();   // to mouse hove any element

    const framesPage = page.frameLocator("#courses-iframe"); // store frame in a variable using framelocator method
    await framesPage.locator("li a[href*='lifetime']:visible").click(); // visible helps to find the element which is visible and ignores the hidden element
    const newText =await framesPage.locator("div[class='text'] h2").textContent();
    console.log(newText.split(" ")[1]); // split text based on space and retrive the particular indexed text


}
)


test("taking page or element screenshot", async ({page})=>                                
{
    await page.goto(URLs.HideShowURL);

    await expect (await page.locator("#displayed-text")).toBeVisible();
    await page.locator("#displayed-text").screenshot({path: 'element level screenshot.png'});// taking screenshot at element level

    await page.locator("#hide-textbox").click();
    await page.screenshot({path: 'page levelscreenshot.png'}); //taking screensot at page level
    await expect (await page.locator("#displayed-text")).toBeHidden();
   
}
)

test("comparing screenshots", async ({page})=>                                
{
    await page.goto("https://www.google.com/");
    expect (await page.screenshot()).toMatchSnapshot('expectedimg.png');
}
)