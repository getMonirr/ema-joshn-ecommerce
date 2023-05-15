import { getShoppingCart } from "../utilities/fakedb";

export const orderItemLoader = async () => {
    const storedCart = getShoppingCart();
    const cartProductsIds = Object.keys(storedCart);

    const res = await fetch('http://localhost:3000/productsInCart', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ cartProductsIds })
    });
    const product = await res.json();


    const newCart = [];

    for (const id in storedCart) {
        const addedProduct = product.find(pd => pd._id === id);
        if (addedProduct) {
            addedProduct.quantity = storedCart[id];
            newCart.push(addedProduct);
        }
    }

    return newCart;
}