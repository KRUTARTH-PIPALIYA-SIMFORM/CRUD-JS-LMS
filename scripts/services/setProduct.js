import getProducts from "../getProducts.js";
import navigate from "./navigate.js";

export default function setProduct(product = {}) {
    const urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get("productId");
    let edit = Boolean(productId);
    let products = getProducts();
    console.log(products.hasOwnProperty(product.productId));
    if (!edit && products.hasOwnProperty(product.productId)) {
        alert("Product with same productId already there");
    } else {
        products[String(product.productId)] = product;
        products = JSON.stringify(products);
        localStorage.setItem("products", products);
        if (edit) alert("Product Edited Successfully");
        else alert("Product Created Successfully");
        navigate("./");
    }
}
