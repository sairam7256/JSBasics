import {test as base} from '@playwright/test';

export const customTest = base.test.extend({
  testDataforOrder1: async ({}, use) => {
    await use({
      userName: 'saitest123@gmail.com',
      password: 'Routes66',
      productName: 'ZARA COAT 3',
    });
  },

  testDataforOrder2: async ({}, use) => {
    await use({
      userName: 'testarunraj123@gmail.com',
      password: 'Routes66',
      productName: 'ADIDAS ORIGINAL',
    });
  },
});

//module.exports = { customTest };
//export { customTest };