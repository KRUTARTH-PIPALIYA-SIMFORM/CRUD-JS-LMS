import getProducts from "./getProducts.js";

export default function renderProducts() {
    let products = getProducts();
    let grid = document.querySelector(".products-grid");
    grid.innerHTML = "";
    for (let key in products) {
        let item = products[key][1];
        let product = document.createElement("div");
        product.classList.add("product");
        product.id = item.productId;

        let image = document.createElement("img");
        image.classList.add("product-image");
        image.setAttribute(
            "src",
            `./assets/productImages/${item.productId}.png`,
        );
        image.setAttribute("alt", `.product${item.productId}`);
        product.appendChild(image);

        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");

        let h3 = document.createElement("h3");
        h3.innerHTML = item.productName;
        productDetails.appendChild(h3);

        let p = document.createElement("p");
        p.classList.add("product-description");
        p.innerHTML = item.description;
        productDetails.appendChild(p);

        let price = document.createElement("div");
        price.innerHTML = `₹${item.price}`;
        productDetails.appendChild(price);

        product.appendChild(productDetails);
        grid.appendChild(product);
    }
}
