import { Given, When, Then } from '@wdio/cucumber-framework';

import CatalogPage from '../../pages/catalog.page';
import ProductDetail from '../../pages/product-detail.page';
import CartPage from '../../pages/cart.page';

const pages = {
    'Catalog': CatalogPage,
    'Product Detail': ProductDetail,
    'Cart': CartPage,
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I select (.+) option in Catalog category$/, async (option) => {
    await CatalogPage.menuCategory(option).click()
});

When(/^I select (.+) product from the list$/, async (productName) => {
    await CatalogPage.product(productName).click()
});

When(/^I click on (.+) button on (.+) page$/, async (button, page) => {
    await pages[page][button].click()
});

Then(/^I should see (.*) product in the Shopping Cart$/, async (elementName) => {
    await expect(CartPage.listedProducts(elementName)).toBeExisting();
});
