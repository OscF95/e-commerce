import Page from "./page";

class ProductDetail extends Page 
{
    public get ['Add to cart'] ()
    {
        return $('a[onclick*="addToCart"]')
    }
}

export default new ProductDetail();