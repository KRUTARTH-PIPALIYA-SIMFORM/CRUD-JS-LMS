import getProducts from "../getProducts.js";
import isProductIdRepeating from "../services/isProductIdRepeating.js";
import setProduct from "../services/setProduct.js";

export default function formSubmit() {
    let form = document.getElementById("product-form");
    const urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get("productId");
    if (productId !== null && productId.length) {
        let products = getProducts();
        if (isProductIdRepeating(productId, products)) alert("Product Doesn't exist here");
        else {
            let filtered = products.filter((item) => {
                if (item.productId == productId)
                    return true;
                return false;
            })
            let product = filtered[0];
            let inputs = form.children;
            for (let elem of inputs) {
                if (elem.classList[0] !== "form-input") continue;
                elem.value = product[elem.name];
            }
        }
    }
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        setProduct(Object.fromEntries(formData.entries()));
    });
}
formSubmit();
