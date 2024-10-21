
const getStoredCart = () =>
{
    const storedCartString = localStorage.getItem("cart");

    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    return [];
}

const addToLS = (id) =>
{
    const cart = getStoredCart();
    cart.push(id)

    saveToLS(cart)
}

const saveToLS = (cart) =>
{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringified);
}

export {addToLS, getStoredCart}