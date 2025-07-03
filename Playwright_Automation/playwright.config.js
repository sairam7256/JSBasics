// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  retries: 1,
  reporter: 'html',
  timeout: 50000,
  expect:{
    timeout: 5000,

  },
   projects : [
    {
      name : 'Chrome',
      use: {

      browserName: 'chromium',
      headless: false,
      screenshot: 'on',
      video: 'off',
      trace: 'on',
      //viewport : {width:750,height : 750},
      // ...devices['iPhone 15 Pro Max'],
      ignoreHTTPSErrors : true ,
      permissions : ['geolocation'],
      

  },

    },
  //   {
  //     name : 'safari',
  //     use: {

  //     browserName: 'chromium',
  //     headless: false,
  //     screenshot : 'on',
  //     trace : 'on'
  // },


  //   }  
   ]
  
  

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

