import renderProducts from "../renderProducts.js";

export default function selectSortevent() {
    let select = document.getElementById("sort-attributes");
    select.addEventListener("change", () => {
        renderProducts();
    });
}
