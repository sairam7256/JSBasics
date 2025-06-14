module.exports ={

    elements:{
        btnElements: "//div[normalize-space()='Elements']",
        btnTextBox: "//span[normalize-space()='Text Box']",
        btnCheckBox: "//span[normalize-space()='Check Box']",
        btnButtonsTab: "//span[normalize-space()='Buttons']",
        textBox: {
            inputFullName: "//input[@id='userName']",
            inputEmailId: "//input[@id='userEmail']",
            inputcurrentAddress: "//textarea[@id='currentAddress']",
            inputPermanantAddress: "//textarea[@id='permanentAddress']",
            btnSubmit: "//button[@id='submit']",
            txtOutputName: "//p[@id='name']",
        },
        checkBox:{
            checkBoxHome: "//span[@class='rct-checkbox']",
            btnToggle: "//button[@title='Toggle']",
            checkBoxDestop: "//label[contains(@for,'tree-node-desktop')]//span[contains(@class,'rct-checkbox')]",
            checkBoxDocuments: "//label[contains(@for,'tree-node-documents')]//span[contains(@class,'rct-checkbox')]",
            checkBoxDownloads: "//label[contains(@for,'tree-node-downloads')]//span[contains(@class,'rct-checkbox')]",
            txtResult: "//div[@id='result']//*[text()='dynamicValue']",
        },
        buttonsTab: {
            btnDoubleClick: "//button[@id='doubleClickBtn']",
            btnRightClick: "//button[@id='rightClickBtn']",
            btnClick: "//button[@id='EEcHb']",
            txtClickMessage: "//p[@id='dynamicClickMessage']",
            txtRightClickMessage: "//p[@id='rightClickMessage']",
            txtDoubleClickMessage: "//p[@id='doubleClickMessage']"
        },
    },



    forms: {
        btnForms: "//div[normalize-space()='Forms']",
        btnPractiseForm : "//span[normalize-space()='Practice Form']",

        registrationForm: {
            inputFirstName : "//input[@id='firstName']",
            inputLastName : "//input[@id='lastName']",
            inputEmail : "//input[@id='userEmail']",
            radioMale : "//label[normalize-space()='Male']",
            radioFemale : "//label[normalize-space()='Female']",
            radioOther : "//label[normalize-space()='Other']",
            inputMobile : "//input[@id='userNumber']",
            inputDOB : "//input[@id='dateOfBirthInput']",
            inputSubject : "//div[@class='subjects-auto-complete__control css-yk16xz-control']",
            optionSubjects : "//div[@class= 'subjects-uto-complete__menu  css-2613qy-menu']//*[text() ='dynamicValue']",
            checkboxSports: "//label[normalize-space()='Sports']",
            checkboxReading : "//label[normalize-space()='Reading']",
            checkboxMusic : "//label[normalize-space()='Music']",
            btnUploadImage : "//input[@id='uploadPicture']",
            inputCurrentAddress : "//textarea[@id='currentAddress']",
            dropdownState : "//div[@class=' css-yk16xz-control']//div[@class=' css-1hwfws3']",
            optionStateAndCity : "//div[@class=' css-2613qy-menu'//*[text()='dynamicValue']",

            dropdownCity : "//div[@id='city']//div[contains(@class,'css-1hwfws3')]",
    
            btnSubmit : "//button[@id='submit']",
            txtSuccessMessage : "//div[@id='example-modal-sizes-title-lg']",
            txtEmailOutput : "//tr[2]//td[2]",
            btnCloseSucessScreen : "//button[@id='closeLargeModal']",


        }


    }
}