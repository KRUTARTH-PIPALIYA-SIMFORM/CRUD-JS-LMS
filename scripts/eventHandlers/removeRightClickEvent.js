export default function removeRightClickEvent() {
    document.addEventListener("click", () => {
        let ele = document.querySelector(".rightclick-menu")
        if (ele)
            ele.style.display = "none";
    });
}
