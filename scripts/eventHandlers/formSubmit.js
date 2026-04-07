import getProducts from "../getProducts.js";
import isProductIdRepeating from "../services/isProductIdRepeating.js";
import navigate from "../services/navigate.js";
import setProduct from "../services/setProduct.js";

document.addEventListener("DOMContentLoaded", () => {
    navigate(window.location.pathname + window.location.search, false);
});

export default function createInit() {
    startFormEvent();
    addImagePreviewEvent();
    const urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get("productId");
    if (productId != null) {
        console.log(productId);
        let products = getProducts();
        let form = document.getElementById("product-form");
        if (!isProductIdRepeating(productId, products))
            alert("Product Doesn't exist here");
        else {
            let filtered = products.filter((item) => {
                if (item.productId == productId) return true;
                return false;
            });
            let product = filtered[0];
            let inputs = form.children;
            for (let elem of inputs) {
                if (elem.classList[0] !== "form-input") continue;
                elem.value = product[elem.name];
            }
            document
                .querySelector(".preview-image")
                .setAttribute("src", product.productImageURL);
        }
    }
}

function startFormEvent() {
    let form = document.getElementById("product-form");

    form.addEventListener("submit", (e) => {
        console.log("prevented");
        e.preventDefault();
        let formData = new FormData(e.target);
        setProduct(Object.fromEntries(formData.entries()));
    });
}

function addImagePreviewEvent() {
    document
        .getElementById("product-image-url")
        .addEventListener("change", imageOnchange);
}

function imageOnchange(e) {
    let img = document.querySelector(".preview-image");
    img.setAttribute("src", e.target.value);
}
