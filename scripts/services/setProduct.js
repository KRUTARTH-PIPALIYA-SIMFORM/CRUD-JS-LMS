import getProducts from "../getProducts.js";

export default function setProduct(product = {}) {
    let products = getProducts();
    products[product.productId] = product;
    products = JSON.stringify(products);
    localStorage.setItem("products", products);
}
