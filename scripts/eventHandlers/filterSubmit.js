import renderProducts from "../renderProducts.js";

export default function filterSubmit(e) {
    let button = document.querySelector(".filter-submit");
    button.addEventListener("click", (e) => {
        e.preventDefault();
        renderProducts();
    });
}
