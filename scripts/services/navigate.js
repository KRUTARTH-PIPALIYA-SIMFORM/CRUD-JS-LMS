import createInit from "../eventHandlers/formSubmit.js";
import { starteventHandlers } from "../eventHandlers/index.js";
import renderProducts from "../renderProducts.js";

export default async function navigate(path = "/", addHistory = true) {
    if (addHistory) history.pushState({}, "", path);

    if (path.includes("/create")) {
        const res = await fetch("./create.html");
        const html = await res.text();
        document.querySelector(".app").innerHTML = html;

        createInit();
    } else if (path.includes("./index") || path == "/") {
        const res = await fetch("./index.html");
        const html = await res.text();
        document.querySelector("body").innerHTML = html;
        starteventHandlers();
        renderProducts();
    }
}
