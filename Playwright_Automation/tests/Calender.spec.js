import {test, expect} from '@playwright/test';
import  {URLs} from '../URLs';

test('Testing calendar options', async ({page})=>{
    const date ="20" ;
    const year ="2023";
    const month = "12";
    const expectedList = [month,date,year];
    await page.goto(URLs.calendarURL);
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label__labelText--from").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(month-1)).click();
    
    await page.locator("//abbr[text()='"+date+"']").click();
    const inputs = await page.locator(".react-date-picker__inputGroup input");
    for (let index = 0; index <inputs.length; index++)
    {
        const value =inputs[index].getAttribute("value");
        expect(value).toEqual(expectedList[index]);
    }
    await page.pause();

}
)