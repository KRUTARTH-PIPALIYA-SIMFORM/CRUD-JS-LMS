import getProducts from "../getProducts.js";
import setProduct from "../services/setProduct.js";

export default function formSubmit() {
    let form = document.getElementById("product-form");
    let productId = window.location.search.slice(11);
    if (productId.length) {
        let products = getProducts();
        if (!products[productId]) alert("Product Doesn't exist");
        else {
            let product = products[productId];
            let inputs = form.children;
            for (let elem of inputs) {
                if (elem.classList[0] !== "form-input") continue;
                elem.value = product[elem.name];
            }
            console.log(inputs.value);
        }
    }
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        setProduct(Object.fromEntries(formData.entries()));
    });
}
formSubmit();
