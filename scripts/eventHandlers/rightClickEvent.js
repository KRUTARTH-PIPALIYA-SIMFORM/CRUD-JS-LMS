import navigate from "../services/navigate.js";

export default function rightclickEvent() {
    let grid = document.querySelector(".products-grid");
    grid.addEventListener("contextmenu", (e) => {
        e.preventDefault();

        if (e.target.getAttribute("productid")) {
            let productId = e.target.getAttribute("productid");
            let menu = document.querySelector(".rightclick-menu");
            menu.style.left = e.pageX + "px";
            menu.style.top = e.pageY + "px";
            menu.style.display = "flex";
            menu.addEventListener('click', (event) => {
                console.log('hi')
                if (event.target.classList[1] === 'edit')
                    navigate(`./create.html?productId=${productId}`);
            })
        }
    });
}
