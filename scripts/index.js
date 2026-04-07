import { starteventHandlers } from "./eventHandlers/index.js";
import renderProducts from "./renderProducts.js";
import navigate from "./services/navigate.js";

document.addEventListener("DOMContentLoaded", () => {
    navigate(window.location.pathname + window.location.search, false);
});
starteventHandlers();

renderProducts();
