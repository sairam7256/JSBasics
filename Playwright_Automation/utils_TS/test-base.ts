
import {test as baseTest} from '@playwright/test' ;
import { Interface } from 'readline';
interface TestDataforOrder1 {
        userName : string ,
        password : string ,
        productName : string 

}
export const customTest = baseTest.extend<{testDataforOrder1: TestDataforOrder1;testDataforOrder2: TestDataforOrder1}>  ({
        testDataforOrder1 :
        {
         userName : "saitest123@gmail.com" ,
        password : "Routes66",
        productName : "ZARA COAT 3"
        },
        testDataforOrder2 :
        {
         userName : "testarunraj123@gmail.com" ,
        password : "Routes66",
        productName : "ADIDAS ORIGINAL"
        },



    }
)
