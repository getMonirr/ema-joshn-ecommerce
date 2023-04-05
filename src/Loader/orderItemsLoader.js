import { getShoppingCart } from "../utilities/fakedb";

export const orderItemLoader = async () => {
    const res = await fetch('products.json');
    const product = await res.json();

    const storedCart = getShoppingCart();
    const newCart = [];

    for (const id in storedCart) {
        const addedProduct = product.find(pd => pd.id === id);
        if (addedProduct) {
            addedProduct.quantity = storedCart[id];
            newCart.push(addedProduct);
        }
    }

    return newCart;
}