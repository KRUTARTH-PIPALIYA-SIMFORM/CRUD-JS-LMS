import renderProducts from "./renderProducts.js";

renderProducts();

let select = document.getElementById("sort-attributes");
select.addEventListener("change", () => {
    console.log("selected");
    renderProducts();
});
