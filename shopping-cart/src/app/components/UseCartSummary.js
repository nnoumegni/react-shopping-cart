export const useCartSummary = (cartItems) => {
    const itemCount =  cartItems.reduce((count, item) => count + parseInt(item.quantity), 0);
    const shipping = 5 * (parseInt((itemCount / 5), 10) + (itemCount % 5 === 0 && itemCount > 5 ? 0 : 1));
    const subtotal = cartItems.reduce((sum, item) => sum + parseInt(item.price), 0);
    const tax = 0.098 * subtotal;
    const total = subtotal + shipping + tax;

    return {
        subtotal,
        total,
        tax,
        shipping,
        itemCount,
    }
}