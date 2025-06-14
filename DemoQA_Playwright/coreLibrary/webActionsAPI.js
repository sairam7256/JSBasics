
var fs = require('fs');
var {logger} = require('./logger');


/**
 * Utility class for Playwright-based browser interactions.
 */
class webActionsAPI {
    timeout = 90 * 1000;
    log = new logger();

    /**
     * Navigates to the given URL.
     * @param {string} url - The URL to open.
     * @example await webActionsAPI.open('https://example.com');
     */
    async open(url) {
        await this.page.goto(url);
        await this.log.info(`Navigated to ${url}`);
    }

    /**
     * Closes the browser session.
     * @example await webActionsAPI.quit();
     */
    async quit() {
        await this.page.context().browser()?.close();
        await this.log.info("Browser session ended");
    }

    /**
     * Closes the current page.
     * @example await webActionsAPI.close();
     */
    async close() {
        await this.page.close();
        await this.log.info("Browser window is closed");
    }

    /**
     * Clears the value in an input field.
     * @param {string} locator - The selector of the input field.
     * @example await webActionsAPI.clear('#username');
     */
    async clear(locator) {
        const element = this.page.locator(locator);
        await element.fill('');
        await this.log.info(`Cleared the field: ${locator}`);
    }

    /**
     * Takes a screenshot and saves it to the ./screenshots directory.
     * @param {string} fileName - The name of the screenshot file.
     * @example await webActionsAPI.takeScreenshot('homepage');
     */
    async takeScreenshot(fileName) {
        try {
            await this.page.screenshot({ path: `./screenshots/${fileName}.png` });
            await this.log.info(`Screenshot taken and saved as ${fileName}.png`);
        } catch (error) {
            await this.log.error(`Failed to take screenshot: ${error.message}`);
        }
    }

    /**
     * Clicks an element after waiting for it to be visible.
     * @param {string} locator - The selector of the element.
     * @param {number} [maxtimeout=10000] - Timeout in ms.
     * @example await webActionsAPI.click('#submit', 5000);
     */
    async click(locator, maxtimeout = 10000) {
        const element = this.page.locator(locator);
        await element.waitFor({ state: 'visible', timeout: maxtimeout });
        await element.click();
        await this.log.info(`Clicked on the element: ${locator}`);
    }

    /**
     * Waits for an element to be visible and then clicks it.
     * @param {string} locator - The selector of the element.
     * @example await webActionsAPI.waitForClickableAndClick('#login');
     */
    async waitForClickableAndClick(locator) {
        try {
            const element = this.page.locator(locator);
            await element.waitFor({ state: 'visible', timeout: 5000 });
            await element.click();
            await this.log.info(`Clicked on the element: ${locator}`);
        } catch (error) {
            await this.log.error(`Failed to click on the element ${locator}: ${error.message}`);
        }
    }

    /**
     * Performs a JavaScript-based click on an element.
     * @param {string} locator - The selector of the element.
     * @example await webActionsAPI.jsClick('#download');
     */
    async jsClick(locator) {
        try {
            await this.page.evaluate((sel) => {
                document.querySelector(sel)?.click();
            }, locator);
            await this.log.info(`Clicked on the element: ${locator}`);
        } catch (error) {
            await this.log.error(`Failed to JavaScript click on the element ${locator}: ${error.message}`);
        }
    }

    /**
     * Sets a value to an input field.
     * @param {string} locator - The selector of the input field.
     * @param {string} value - The value to set.
     * @example await webActionsAPI.setValue('#email', 'test@example.com');
     */
    async setValue(locator, value) {
        const element = this.page.locator(locator);
        await element.fill(value);
        await this.log.info(`Set value: ${value} to ${locator}`);
    }

    /**
     * Sets a value in a Flutter web input using keystrokes.
     * @param {string} locator - The selector of the input field.
     * @param {string} value - The value to set.
     * @example await webActionsAPI.setFlutterTextInput('#flutter-input', 'Hello');
     */
    async setFlutterTextInput(locator, value) {
        const input = this.page.locator(locator);
        await input.click();
        await input.fill('');
        await input.type(value);
        await this.log.info(`Set Flutter text input value: ${value} to ${locator}`);
    }

    /**
     * Scrolls to the element and clicks on it.
     * @param {string} locator - The selector of the element.
     * @example await webActionsAPI.scrollAndClick('#footerLink');
     */
    async scrollAndClick(locator) {
        const element = this.page.locator(locator);
        await element.scrollIntoViewIfNeeded();
        await element.click();
    }

       /**
     * @async Perform a context (right) click on an element.
     * @param {string} locator - The Playwright selector of the element.
     * @example await actions.contextClick('#elementId');
     */
    async contextClick(locator) {
        try {
            await this.page.locator(locator).click({ button: 'right' });
            await this.log.info(`Performed context click on ${locator}`);
        } catch (error) {
            await this.log.error(`Failed to perform context click: ${error.message}`);
        }
    }

    /**
     * @async Perform a double click on an element.
     * @param {string} locator - The Playwright selector of the element.
     * @example await actions.doubleClick('#elementId');
     */
    async doubleClick(locator) {
        try {
            await this.page.locator(locator).dblclick();
            await this.log.info(`Double clicked on ${locator}`);
        } catch (error) {
            await this.log.error(`Failed to double click: ${error.message}`);
        }
    }

    /**
     * @async Move the mouse to hover over an element.
     * @param {string} locator - The Playwright selector of the element.
     * @example await actions.moveToElement('#elementId');
     */
    async moveToElement(locator) {
        try {
            await this.page.locator(locator).hover();
            await this.log.info(`Hovered over element ${locator}`);
        } catch (error) {
            await this.log.error(`Failed to move to element: ${error.message}`);
        }
    }

    /**
     * @async Select a dropdown option by clicking dropdown and then the option.
     * @param {string} dropdownLocator - Selector for the dropdown trigger.
     * @param {string} optionLocator - Selector for the option to click.
     * @example await actions.selectDropDownwithClick('#dropdown', '#option');
     */
    async selectDropDownwithClick(dropdownLocator, optionLocator) {
        try {
            await this.page.locator(dropdownLocator).click();
            await this.page.locator(optionLocator).click();
            await this.log.info(`Selected option ${optionLocator} from dropdown ${dropdownLocator}`);
        } catch (error) {
            await this.log.error(`Failed to select option: ${error.message}`);
        }
    }

    /**
     * @async Select a dropdown option by its index.
     * @param {string} locator - The dropdown selector.
     * @param {number} index - The index of the option to select.
     * @example await actions.selectOptionByIndex('#dropdown', 1);
     */
    async selectOptionByIndex(locator, index) {
        try {
            await this.page.locator(locator).selectOption({ index });
            await this.log.info(`Selected index ${index} from ${locator}`);
        } catch (error) {
            await this.log.error(`Failed to select index ${index}: ${error.message}`);
        }
    }

    /**
     * @async Select a dropdown option by visible text.
     * @param {string} locator - The dropdown selector.
     * @param {string} text - The visible text to select.
     * @example await actions.selectFromDropdown('#dropdown', 'Option');
     */
    async selectFromDropdown(locator, text) {
        try {
            await this.page.locator(locator).selectOption({ label: text });
            await this.log.info(`Selected text "${text}" from ${locator}`);
        } catch (error) {
            await this.log.error(`Failed to select text "${text}": ${error.message}`);
        }
    }

    /**
     * @async Check if an element exists on the page.
     * @param {string} locator - The element selector.
     * @returns {Promise<boolean>} - True if the element exists.
     * @example const exists = await actions.elementExists('#element');
     */
    async elementExists(locator) {
        const count = await this.page.locator(locator).count();
        const exists = count > 0;
        await this.log.info(`Element ${locator} exists: ${exists}`);
        return exists;
    }

    /**
     * @async Select a dropdown option by value.
     * @param {string} locator - The dropdown selector.
     * @param {string} value - The option value to select.
     * @example await actions.selectDropdown('#dropdown', 'value1');
     */
    async selectDropdown(locator, value) {
        try {
            await this.page.locator(locator).selectOption({ label: value });
            await this.log.info(`Selected "${value}" from ${locator}`);
        } catch (error) {
            await this.log.error(`Failed to select value "${value}": ${error.message}`);
        }
    }

    /**
     * @async Send key(s) to an element or globally.
     * @param {string|string[]} key - Key or combination of keys.
     * @param {string|null} locator - Optional selector to target specific element.
     * @example await actions.clickKeys('Enter', '#input');
     * @example await actions.clickKeys(['Control', 'a']);
     */
    async clickKeys(key, locator = null) {
        try {
            if (typeof locator === 'string') {
                await this.page.locator(locator).click();
                await this.page.keyboard.press(await this.checkKey(key));
                await this.log.info(`Sent key(s): ${key} to ${locator}`);
            } else if (locator === null && Array.isArray(key)) {
                await this.page.keyboard.down(await this.checkKey(key[0]));
                await this.page.keyboard.press(key[1]);
                await this.page.keyboard.up(await this.checkKey(key[0]));
                await this.log.info(`Sent global key combo: ${key}`);
            } else {
                await this.page.keyboard.press(await this.checkKey(key));
                await this.log.info(`Sent global key: ${key}`);
            }
        } catch (error) {
            await this.log.error(`Failed to send key(s): ${error.message}`);
        }
    }

    /**
     * @async Convert key name to Playwright-compatible key.
     * @param {string} key - Raw key input.
     * @returns {Promise<string>} - Mapped key.
     */
    async checkKey(key) {
        const map = {
            enter: 'Enter', tab: 'Tab', esc: 'Escape', escape: 'Escape',
            backspace: 'Backspace', delete: 'Delete',
            arrowup: 'ArrowUp', up: 'ArrowUp',
            arrowdown: 'ArrowDown', down: 'ArrowDown',
            arrowleft: 'ArrowLeft', left: 'ArrowLeft',
            arrowright: 'ArrowRight', right: 'ArrowRight',
            space: 'Space', spacebar: 'Space',
            ctrl: 'Control', control: 'Control',
            shift: 'Shift', alt: 'Alt',
            meta: 'Meta', windows: 'Meta',
            f1: 'F1', f2: 'F2', f3: 'F3', f4: 'F4',
            f5: 'F5', f6: 'F6', f7: 'F7', f8: 'F8',
            f9: 'F9', f10: 'F10', f11: 'F11', f12: 'F12',
        };
        return map[key.toLowerCase()] || key;
    }

    /**
     * @async Refresh the browser page.
     * @example await actions.refreshBrowser();
     */
    async refreshBrowser() {
        try {
            await this.page.reload();
            await this.log.info('Page refreshed');
        } catch (error) {
            await this.log.error(`Failed to refresh page: ${error.message}`);
        }
    }

    /**
     * @async Dismiss a browser alert.
     * @example await actions.dismissAlert();
     */
    async dismissAlert() {
        try {
            this.page.once('dialog', async dialog => await dialog.dismiss());
            await this.log.info('Alert dismissed');
        } catch (error) {
            await this.log.error(`Failed to dismiss alert: ${error.message}`);
        }
    }

    /**
     * Accepts an alert dialog if present.
     * @async
     * @returns {Promise<void>}
     * @throws {Error} If accepting the alert fails.
     * @example await webActionsAPI.acceptAlert();
     */
    async acceptAlert() {
        try {
            await browser.acceptAlert();
            await this.log.info('Alert accepted');
        } catch (error) {
            await this.log.error(`Failed to accept alert: ${error.message}`);
            throw error;
        }
    }

    /**
     * Checks if an alert dialog is present.
     * @async
     * @returns {Promise<boolean>} True if an alert is present, otherwise false.
     * @throws {Error} If checking for an alert fails.
     * @example const isAlertPresent = await webActionsAPI.isAlertPresent();
     */
    async isAlertPresent() {
        try {
            await browser.getAlertText();
            await this.log.info('Alert is present');
            return true;
        } catch (error) {
            await this.log.info('No alert present');
            return false;
        }
    }

    /**
     * Switches to a window by its title.
     * @async
     * @param {string} windowTitle - The title of the window to switch to.
     * @returns {Promise<void>}
     * @throws {Error} If switching to the window fails.
     * @example await webActionsAPI.switchToWindow('My Window Title');
     */
    async switchToWindow(windowTitle) {
        try {
            const windows = await browser.getWindowHandles();
            for (const handle of windows) {
                await browser.switchToWindow(handle);
                const title = await browser.getTitle();
                if (title.includes(windowTitle)) {
                    await this.log.info(`Switched to window: ${windowTitle}`);
                    return;
                }
            }
            throw new Error(`Window with title "${windowTitle}" not found`);
        } catch (error) {
            await this.log.error(`Failed to switch to window: ${error.message}`);
            throw error;
        }
    }

    /**
     * Scrolls an element into view.
     * @async
     * @param {string|WebdriverIO.Element} locator - The WebdriverIO locator or element to scroll into view.
     * @returns {Promise<void>}
     * @throws {Error} If scrolling the element into view fails.
     * @example await webActionsAPI.scrollIntoView('#elementId');
     */
    async scrollIntoView(locator) {
        try {
            const element = typeof locator === 'string' ? await $(locator) : locator;
            await element.scrollIntoView();
            await this.log.info(`Scrolled to element ${locator}`);
        } catch (error) {
            await this.log.error(`Failed to scroll to element ${locator}: ${error.message}`);
            throw error;
        }
    }

    /**
     * Checks if an element is displayed within a specified timeout.
     * @async
     * @param {WebdriverIO.Element} element - The WebdriverIO element to check.
     * @param {number} [timeout=5000] - Timeout in milliseconds to wait for the element to be displayed.
     * @returns {Promise<boolean>} True if the element is displayed within the timeout, otherwise false.
     * @throws {Error} If checking the element's visibility fails.
     * @example const isVisible = await webActionsAPI.isDisplayed(element, 5000);
     */
    async isDisplayed(element, timeout = 5000) {
        try {
            await element.waitForExist({ timeout });
            await element.waitForDisplayed({ timeout });
            const isDisplayed = await element.isDisplayed();
            await this.log.info(`Element ${await element.selector} is displayed: ${isDisplayed}`);
            return isDisplayed;
        } catch (error) {
            await this.log.info(`Element: ${await element.selector} is NOT displayed within timeout: ${error.message}`);
            return false;
        }
    }

    /**
     * Pauses the execution for a specified amount of time.
     * @async
     * @param {number} timeout - The time to wait in seconds.
     * @returns {Promise<void>}
     * @throws {Error} If pausing the execution fails.
     * @example await webActionsAPI.wait(5);
     */
    async wait(timeout) {
        try {
            await browser.pause(timeout * 1000);
            await this.log.info(`Waited for ${timeout} seconds`);
        } catch (error) {
            await this.log.error(`Failed to wait: ${error.message}`);
            throw error;
        }
    }

    /**
     * Waits for a page to load completely.
     * @async
     * @param {number} [timeout=10000] - Timeout in milliseconds to wait for the page to load.
     * @returns {Promise<void>}
     * @throws {Error} If waiting for the page to load fails.
     * @example await webActionsAPI.waitForPageToLoad(10000);
     */
    async waitForPageToLoad(timeout = 10000) {
        try {
            await browser.waitUntil(
                async () => (await browser.execute(() => document.readyState)) === 'complete',
                { timeout, timeoutMsg: 'Page did not load within the specified time' }
            );
            await this.log.info('Page has loaded');
        } catch (error) {
            await this.log.error(`Failed to wait for page to load: ${error.message}`);
            throw error;
        }
    }

    /**
     * Waits for an element to be selected.
     * @async
     * @param {string} locator - The WebdriverIO locator or selector of the element.
     * @param {number} [timeout=5000] - Timeout in milliseconds to wait for the element to be selected.
     * @returns {Promise<boolean>} True if the element is selected, otherwise false.
     * @throws {Error} If waiting for the element to be selected fails.
     * @example const isSelected = await webActionsAPI.waitForElementToBeSelected('#checkbox', 5000);
     */
    async waitForElementToBeSelected(locator, timeout = 5000) {
        try {
            const element = await $(locator);
            const isSelected = await element.waitForSelected({ timeout });
            await this.log.info(`Element ${locator} is selected: ${isSelected}`);
            return isSelected;
        } catch (error) {
            await this.log.error(`Failed to wait for element to be selected: ${error.message}`);
            return false;
        }
    }

    /**
     * Waits for an element to be not selected.
     * @async
     * @param {string} locator - The WebdriverIO locator or selector of the element.
     * @param {number} [timeout=5000] - Timeout in milliseconds to wait for the element to be not selected.
     * @returns {Promise<boolean>} True if the element is not selected, otherwise false.
     * @throws {Error} If waiting for the element to be not selected fails.
     * @example const isNotSelected = await webActionsAPI.waitForElementToBeNotSelected('#checkbox', 5000);
     */
    async waitForElementToBeNotSelected(locator, timeout = 5000) {
        try {
            const element = await $(locator);
            const isNotSelected = await element.waitForSelected({ timeout, reverse: true });
            await this.log.info(`Element ${locator} is not selected: ${isNotSelected}`);
            return isNotSelected;
        } catch (error) {
            await this.log.error(`Failed to wait for element to be not selected: ${error.message}`);
            return false;
        }
    }

    /**
     * Waits for an element to be enabled.
     * @async
     * @param {string} locator - The WebdriverIO locator or selector of the element.
     * @param {number} [timeout=5000] - Timeout in milliseconds to wait for the element to be enabled.
     * @returns {Promise<boolean>} True if the element is enabled, otherwise false.
     * @throws {Error} If waiting for the element to be enabled fails.
     * @example const isEnabled = await webActionsAPI.waitForElementToBeEnabled('#inputField', 5000);
     */
    async waitForElementToBeEnabled(locator, timeout = 5000) {
        try {
            const element = await $(locator);
            const isEnabled = await element.waitForEnabled({ timeout });
            await this.log.info(`Element ${locator} is enabled: ${isEnabled}`);
            return isEnabled;
        } catch (error) {
            await this.log.error(`Failed to wait for element to be enabled: ${error.message}`);
            return false;
        }
    }

    /**
     * Waits for an element to be disabled.
     * @async
     * @param {string} locator - The WebdriverIO locator or selector of the element.
     * @param {number} [timeout=5000] - Timeout in milliseconds to wait for the element to be disabled.
     * @returns {Promise<boolean>} True if the element is disabled, otherwise false.
     * @throws {Error} If waiting for the element to be disabled fails.
     * @example const isDisabled = await webActionsAPI.waitForElementToBeDisabled('#inputField', 5000);
     */
    async waitForElementToBeDisabled(locator, timeout = 5000) {
        try {
            const element = await $(locator);
            const isDisabled = await element.waitForEnabled({ timeout, reverse: true });
            await this.log.info(`Element ${locator} is disabled: ${isDisabled}`);
            return isDisabled;
        } catch (error) {
            await this.log.error(`Failed to wait for element to be disabled: ${error.message}`);
            return false;
        }
    }

    /**
     * Waits for an element to be visible on the page.
     * @async
     * @param {string} locator - The selector (CSS/XPath) of the element to wait for.
     * @param {import('@playwright/test').Page} page - The Playwright `page` object.
     * @param {number} [timeout=5000] - Timeout in milliseconds.
     * @returns {Promise<boolean>} - Returns true if the element is visible, false otherwise.
     * @example
     * await waitForElementToBeVisible("//button[@id='submit']", page);
     */
    async waitForElementToBeVisible(page, locator, timeout = 5000) {
        try {
            const element = page.locator(locator);
            await element.waitFor({ state: 'visible', timeout });
            console.log(`Element ${locator} is visible`);
            return true;
        } catch (error) {
            console.error(`Failed to wait for element to be visible: ${error.message}`);
            return false;
        }
    }

    /**
     * Waits for the specified element to become invisible within the given timeout.
     * @async
     * @param {string|WebdriverIO.Element} locator - CSS selector or WebdriverIO element.
     * @param {number} [timeout=5000] - Time to wait in milliseconds.
     * @returns {Promise<boolean>} - True if element becomes invisible, false otherwise.
     * @example
     * const isInvisible = await webWaitUtils.waitForElementToBeInVisible('#popup', 5000);
     */
    async waitForElementToBeInVisible(locator, timeout = 5000) {
        try {
            const element = typeof locator === 'string' ? await $(locator) : locator;
            const isInvisible = await element.waitForDisplayed({ timeout, reverse: true });
            await this.log.info(`Element ${await element.selector} is invisible: ${isInvisible}`);
            return isInvisible;
        } catch (error) {
            await this.log.info(`Failed to wait for element ${await element.selector} to be invisible: ${error.message}`);
            return false;
        }
    }

    /**
     * Waits for the entire HTML page to be fully loaded (document.readyState === 'complete').
     * @async
     * @param {number} [timeout=10000] - Time to wait in milliseconds.
     * @returns {Promise<void>}
     * @example
     * await webWaitUtils.waitForHtmlPageToLoad(10000);
     */
    async waitForHtmlPageToLoad(timeout = 10000) {
        try {
            await browser.waitUntil(
                async () => await browser.execute(() => document.readyState === 'complete'),
                { timeout, timeoutMsg: 'Page did not load within the expected time' }
            );
            await this.log.info('HTML page loaded successfully');
        } catch (error) {
            await this.log.error(`Failed to load the HTML page: ${error.message}`);
        }
    }

    /**
     * Checks if a specific element contains a given text message.
     * @async
     * @param {string} locator - CSS selector of the target element.
     * @param {string} message - Expected text that should be contained within the element.
     * @returns {Promise<void>} - Resolves if text is found; throws error if not.
     * @throws {Error} If the text is not found in the element.
     * @example
     * await webWaitUtils.checkTextMessage('#notification', 'Saved successfully');
     */
    async checkTextMessage(locator, message) {
        try {
            const element = await $(locator);
            await expect(element).toHaveTextContaining(message);
            await this.log.info(`Text "${message}" is found within element: ${locator}`);
        } catch (error) {
            await this.log.error(`Failed to verify text message. Expected "${message}" in ${locator}: ${error.message}`);
            throw error;
        }
    }

    /**
     * Waits until the current browser URL matches the expected URL.
     * @async
     * @param {string} expectedUrl - URL that the browser should match.
     * @param {number} [timeout=5000] - Time to wait in milliseconds.
     * @returns {Promise<void>}
     * @throws {Error} If the URL does not match within the given timeout.
     * @example
     * await webWaitUtils.expectUrlToBe('https://example.com/dashboard');
     */
    async expectUrlToBe(expectedUrl, timeout = 5000) {
        try {
            await browser.waitUntil(
                async () => (await browser.getUrl()) === expectedUrl,
                {
                    timeout,
                    timeoutMsg: `Expected URL to be ${expectedUrl} but found ${await browser.getUrl()}`
                }
            );
            await this.log.info(`Successfully navigated to the expected URL: ${expectedUrl}`);
        } catch (error) {
            await this.log.error(`Failed to match the expected URL: ${error.message}`);
            throw new Error(`URL mismatch: ${error.message}`);
        }
    }

}
exports.webActionsAPI = webActionsAPI;