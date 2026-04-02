import getProducts from "../getProducts.js";
import isProductIdRepeating from "./isProductIdRepeating.js";
import navigate from "./navigate.js";

export default function setProduct(product = {}) {
    const urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get("productId");
    let edit = Boolean(productId);
    let products = getProducts();
    if (!edit && isProductIdRepeating(product.productId, products)) {
        alert("Product with same productId already there");
    } else {
        if (edit) {
            if (product.productId != productId) {
                alert("You changed the productId, Try again");
            } 
            let flag = false;
            for (let i = 0; i < products.length; i++) {
                if (product.productId == products[i].productId) {
                    products[i] = product;
                    flag = true;
                    break;
                }
            }
            if(flag){
                products = JSON.stringify(products);
                localStorage.setItem("products", products);
                alert("Product Edited Successfully");
            }
        } else {
            products.push(product);
            products = JSON.stringify(products);
            localStorage.setItem("products", products);
            alert("Product Created Successfully");
        }
        navigate("/");
    }
}
