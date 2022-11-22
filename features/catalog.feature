Feature: Catalog interactions

    Scenario: User is able to add items to the shopping kart

        Given I am on the Catalog page
        When I select Laptops option in Catalog category
            And I select Dell i7 8gb product from the list
            And I click on Add to cart button on Product Detail page
            And I am on the Cart page
        Then I should see Dell i7 8gb product in the Shopping Cart

