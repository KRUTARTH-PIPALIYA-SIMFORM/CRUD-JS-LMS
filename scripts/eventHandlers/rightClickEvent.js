export default function rightclickEvent() {
    let grid = document.querySelector(".products-grid");
    grid.addEventListener("contextmenu", (e) => {
        e.preventDefault();

        if (e.target.getAttribute("productid")) {
            let menu = document.querySelector(".rightclick-menu");
            menu.style.left = e.clientX + "px";
            menu.style.top = e.clientY + "px";
            menu.style.display = "flex";
        }
    });
}
