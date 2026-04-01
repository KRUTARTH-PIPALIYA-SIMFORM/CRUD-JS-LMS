import getProducts from "./getProducts.js";

export default function renderProducts() {
    let products = getProducts();
    let grid = document.querySelector(".products-grid");
    grid.innerHTML = "";
    for (let key in products) {
        let item = products[key];
        let product = document.createElement("div");
        product.classList.add("product");
        product.setAttribute("productId", item.productId);

        let image = document.createElement("img");
        image.classList.add("product-image");
        image.setAttribute(
            "src",
            `./assets/productImages/${item.productId}.png`,
        );
        image.setAttribute("alt", `.product${item.productId}`);
        image.setAttribute("productId", item.productId);
        product.appendChild(image);

        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");
        productDetails.setAttribute("productId", item.productId);

        let h3 = document.createElement("h3");
        h3.innerHTML = item.productName;
        h3.setAttribute("productId", item.productId);
        productDetails.appendChild(h3);

        let p = document.createElement("p");
        p.classList.add("product-description");
        p.innerHTML = item.description;
        p.setAttribute("productId", item.productId);
        productDetails.appendChild(p);

        let price = document.createElement("div");
        price.innerHTML = `₹${item.price}`;
        price.setAttribute("productId", item.productId);
        productDetails.appendChild(price);

        product.appendChild(productDetails);
        grid.appendChild(product);
    }
}
