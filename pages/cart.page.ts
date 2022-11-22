import Page from "./page";

class CartPage extends Page {

    public listedProducts(productName:string)
    {
        return $(`//tbody//td[contains(text(), '${productName}')]`)
    }

    public open() 
    {
        return super.open("/cart.html");
    }
}

export default new CartPage();
