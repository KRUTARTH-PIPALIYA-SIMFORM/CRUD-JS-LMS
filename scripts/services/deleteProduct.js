import getProducts from "../getProducts.js";
import renderProducts from "../renderProducts.js";

export default function deleteProduct(productId = 0) {
    let products = getProducts().filter((item) => {
        return item.productId != productId;
    });
    console.log(products, productId)
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
}
