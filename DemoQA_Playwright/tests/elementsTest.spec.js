const {test, expect} = require('@playwright/test');
// tests/demoQATest.spec.js
const { demoQABasicPO } = require('../pageObjects/demoQABasicPO');

test('Fill form and check output', async ({ page }) => {
    const demoQABasicPO = new demoQABasicPO(page);

    await page.goto('https://demoqa.com/text-box');

    await demoPage.enterFullName('John Doe');
    await demoPage.submitForm();

    const output = await demoPage.getOutputName();
    expect(output).toContain('John Doe');
});
