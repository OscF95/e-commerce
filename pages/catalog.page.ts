import Page from "./page";

class CatalogPage extends Page 
{

    public menuCategory (option:string)
    {
        return $(`//div[@class='list-group']/a[contains(text(), '${option}')]`)
    }

    public product(productName:string)
    {
        return $(`//div[@class='card-block']//a[contains(text(), '${productName}')]`)
    }

    public open () {
        return super.open('/');
    }
}

export default new CatalogPage();