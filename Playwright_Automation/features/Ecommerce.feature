Feature: Ecommerce Validations

@PlaceOrder
Scenario:  Placing the order
    Given a login to Ecommerce app with "saitest123@gmail.com" and "Routes66"
    When  Add "IPHONE 13 PRO" product to cart
    Then Verify "IPHONE 13 PRO" is displayed in the cart
    When Enter the valid details and place order 
    Then Verify order is present in the orderhistory
    