import setProduct from "../services/setProduct.js";

export default function formSubmit() {
    let form = document.getElementById("product-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        setProduct(Object.fromEntries(formData.entries()));
    });
}
formSubmit();
