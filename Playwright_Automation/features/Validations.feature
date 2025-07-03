Feature: Ecommerce validations

@ErrorMsg
Scenario Outline: Checking error message
    Given a login to a website app with "<username>" and "<password>"
    Then Verify error message

    Examples:
        | username  | password |
        | saitest   | abcdefg  | 
        | aruntest  | 1223344  | 

 

 