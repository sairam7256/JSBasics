const {test} = require('@playwright/test');

test("PalyWright specail locators", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.waitForTimeout(2000);
    await page.getByLabel("Employed").click();    // get by label is used to retieve element by label tag name
    await page.getByLabel("Gender").selectOption("Female"); // select option is used to get from select tag options ( dropdown)
    await page.getByPlaceholder("Password").fill("Routes66"); //getByPlaceholder is used to get element through placeholder text
    await page.getByRole("button",{name: 'Submit'}).click(); //getByRole is used to get element through type of role , say button . It will fetch all the buttons and then we need to provide the name of the button to locate it specifically 
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link",{name: 'Shop'}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click(); // this will help to iterate easily accross the block
    


});