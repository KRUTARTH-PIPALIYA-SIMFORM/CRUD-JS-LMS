import { starteventHandlers } from "./eventHandlers/index.js";
import renderProducts from "./renderProducts.js";
import navigate from "./services/navigate.js";

console.log("DOM loaded from outside");
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");

    navigate(window.location.pathname);
});
starteventHandlers();

renderProducts();
