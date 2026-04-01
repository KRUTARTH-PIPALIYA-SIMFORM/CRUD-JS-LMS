import getProducts from "../getProducts.js";

export default function setProduct(product = {}, edit = false) {
    let products = getProducts();
    if (!edit && products.hasOwnProperty(product.productId)) {
        alert("Product with same productId already there");
    } else {
        products[String(product.productId)] = product;
        products = JSON.stringify(products);
        localStorage.setItem("products", products);
    }
}
