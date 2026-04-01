import getProducts from "../getProducts.js";
import navigate from "./navigate.js";

export default function setProduct(product = {}) {
    let edit = false;
    edit = window.location.href.slice(11)?.length > 0 ?? false;
    let products = getProducts();
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
