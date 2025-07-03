import  {test, expect} from '@playwright/test';

const pageURL= "https://rahulshettyacademy.com/loginpagePractise/" ;
test("First testcase", async ({browser})=> {

    const context = await browser.newContext();
    const page = await context.newPage()
    const inputUsername = "//input[@id='username']";
    const inputPassword = "//input[@id='password']";
    const btnLogin = "//input[@id='signInBtn']";

    await page.goto(pageURL);
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    

    await page.locator(inputUsername).fill("rahulshettyacademy")
    await page.locator(inputPassword).fill("learning1")
    await page.locator(btnLogin).click()
    //await page.waitForTimeout(5000);
    console.log ( await page.locator("[style*='block']").textContent() );
    await expect(await page.locator("[style*='block']")).toContainText("Incorrect");
    //console.log(await page.locator("(//app-card//h4/a)").nth(1).textContent());
    
    
    //print all elements
    //console.log(await page.locator("(//app-card//h4/a)").allInnerTexts());
    //console.log(await page.locator("(//app-card//h4/a)").allTextContents());



});

// test("second testcase", async ({y})=>{
//     await page.goto("https://www.google.com");
//     await page.waitForTimeout(2000);
// });