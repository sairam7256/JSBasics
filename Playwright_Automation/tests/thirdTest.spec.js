const {test, expect} = require('@playwright/test');

//const pageURL= "https://rahulshettyacademy.com/loginpagePractise/" ;
test("handle multiple pages in a browser", async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage()
    const pageURL= "https://rahulshettyacademy.com/loginpagePractise/" ;
    await page.goto(pageURL)
await page.waitForTimeout(2000)
   const blinkPageLink=  page.locator(".blinkingText[href='https://rahulshettyacademy.com/documents-request']");
    const [newPage] = await Promise.all([     //handling multiple windows

    context.waitForEvent('page'), //listen for any new page - pending , rejected , fulfilled
    blinkPageLink.click(),
])
 const text = await newPage.locator(".im-para.red").textContent();
console.log(text);


 
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    console.log(domain);
    await page.locator("#username").fill(domain);
    //await page.pause();
    console.log(await page.locator("#username").textContent());
});