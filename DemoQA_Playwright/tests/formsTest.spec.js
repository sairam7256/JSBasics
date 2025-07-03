import { test, expect } from '@playwright/test';
import path from 'path';

test('File upload on DemoQA form', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://demoqa.com/automation-practice-form');

  // Remove fixed footer or ads that might block clicks
  await page.evaluate(() => {
    document.querySelector('#fixedban')?.remove();
    document.querySelector('footer')?.remove();
  });

  // Fill required fields
  await page.fill('#firstName', 'John');
  await page.fill('#lastName', 'Doe');
  await page.fill('#userEmail', 'john.doe@example.com');
  await page.click('label[for="gender-radio-1"]'); // Male
//   await page.fill('#userNumber', '1234567890');

  // Upload file from C:\Documents
  const filePath = "C:\\Users\\Dell\\OneDrive\\Pictures\\Screenshots\\Screenshot 2025-05-14 152928.png"; // adjust the path as needed
  await page.setInputFiles('#uploadPicture', filePath);

  // Optional: Submit and check modal
  await page.click('#submit');
  await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form');

  // Wait a bit before closing
  await page.waitForTimeout(2000);
});
