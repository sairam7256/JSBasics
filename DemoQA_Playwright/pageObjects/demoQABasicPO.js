const page = require('./page.js');
var demoQALocators = require('../objectRepository/demoQALocators.js');

const btnElements = demoQALocators.elements.btnElements;
const btnTextBox = demoQALocators.elements.btnTextBox;
const btnCheckBox = demoQALocators.elements.btnCheckBox;
const btnButtonsTab = demoQALocators.elements.btnButtonsTab;

// Text Box section
const inputFullName = demoQALocators.elements.textBox.inputFullName;
const inputEmailId = demoQALocators.elements.textBox.inputEmailId;
const inputcurrentAddress = demoQALocators.elements.textBox.inputcurrentAddress;
const inputPermanantAddress = demoQALocators.elements.textBox.inputPermanantAddress;
const btnSubmit = demoQALocators.elements.textBox.btnSubmit;
const txtOutputName = demoQALocators.elements.textBox.txtOutputName;

// Check Box section
const checkBoxHome = demoQALocators.elements.checkBox.checkBoxHome;
const btnToggle = demoQALocators.elements.checkBox.btnToggle;
const checkBoxDestop = demoQALocators.elements.checkBox.checkBoxDestop;
const checkBoxDocuments = demoQALocators.elements.checkBox.checkBoxDocuments;
const checkBoxDownloads = demoQALocators.elements.checkBox.checkBoxDownloads;
const txtResult = demoQALocators.elements.checkBox.txtResult;

// Buttons Tab section
const btnDoubleClick = demoQALocators.elements.buttonsTab.btnDoubleClick;
const btnRightClick = demoQALocators.elements.buttonsTab.btnRightClick;
const btnClick = demoQALocators.elements.buttonsTab.btnClick;
const txtClickMessage = demoQALocators.elements.buttonsTab.txtClickMessage;
const txtRightClickMessage = demoQALocators.elements.buttonsTab.txtRightClickMessage;
const txtDoubleClickMessage = demoQALocators.elements.buttonsTab.txtDoubleClickMessage;


class demoQABasicPO extends page {

      constructor(page) {
        this.page = page;
      }

    async openDemoQAApplication(){
        await this.log.info("Opening DemoQA Application");
        await this.action.open("https://demoqa.com/text-box");
        await this.action.waitForPageToLoad();
    }

    async verifyElementsTab(){
        await this.action.waitForElementToBeVisible(this.page, btnElements);
        await this.action.click(btnElements);
        await this.action.isDisplayed();

    }


    async verifyTextBox(){

    }
    
    async verifyCheckBox(){

    }



}
module.exports = new demoQABasicPO();