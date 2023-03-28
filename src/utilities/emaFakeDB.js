
// add cart to data base
const emaAddToDB = cart => {
    localStorage.setItem('ema-shopping-cart', JSON.stringify(cart));
}

// get cart from data base
const getCartFromDB = () => {
    return JSON.parse(localStorage.getItem('ema-shopping-cart'));
}

// clear cart from data base
const clearCartFromDB = () => {
    localStorage.removeItem('shopping-cart');
}
export {
    emaAddToDB,
    getCartFromDB,
    clearCartFromDB
}