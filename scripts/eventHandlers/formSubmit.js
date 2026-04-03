import getProducts from "../getProducts.js";
import isProductIdRepeating from "../services/isProductIdRepeating.js";
import setProduct from "../services/setProduct.js";

export default function createInit() {
    console.log('start')
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
            console.log(product);
            let inputs = form.children;
            for (let elem of inputs) {
                if (elem.classList[0] !== "form-input") continue;
                elem.value = product[elem.name];
            }
        }
    }
}

function startFormEvent() {
    let form = document.getElementById("product-form");
    console.log("form is", form);
    form.addEventListener("submit", (e) => {
        console.log("prevented");
        e.preventDefault();
        let formData = new FormData(e.target);
        setProduct(Object.fromEntries(formData.entries()));
    });
}

function addImagePreviewEvent() {
    console.log('hi')
    document.getElementById('product-image-url').addEventListener('change', imageOnchange)
}

function imageOnchange(e) {
    let img = document.querySelector('.preview-image');
    img.setAttribute('src', e.target.value)
}