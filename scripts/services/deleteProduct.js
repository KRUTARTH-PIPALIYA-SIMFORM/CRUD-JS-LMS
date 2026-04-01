import getProducts from "../getProducts.js";
import renderProducts from "../renderProducts.js";

export default function deleteProduct(productId = 0) {
    let products = getProducts();
    delete products[productId];
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
}
