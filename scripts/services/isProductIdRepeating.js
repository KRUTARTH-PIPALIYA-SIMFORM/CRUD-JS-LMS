export default function isProductIdRepeating(productId, products) {
    for (let key in products) {
        if (products[key][productId] === productId) return true;
    }
    return false;
}
