export default function removeRightClickEvent() {
    document.addEventListener("click", () => {
        document.querySelector(".rightclick-menu").style.display = "none";
    });
}
