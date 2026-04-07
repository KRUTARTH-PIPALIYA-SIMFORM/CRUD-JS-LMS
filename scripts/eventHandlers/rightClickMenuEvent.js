import navigate from "../services/navigate.js";
import deleteProduct from "../services/deleteProduct.js";

export default function rightClickMenuEvent() {
    let menu = document.querySelector(".rightclick-menu");

    menu.addEventListener("click", (event) => {
        let productId = menu.getAttribute("productId");

        if (event.target.classList[1] === "edit")
            navigate(`./create.html?productId=${productId}`);
        else if (event.target.classList[1] === "delete") {
            const flag = confirm("Do you really want to delete this?");

            if (flag) deleteProduct(productId);
        }
    });
}
