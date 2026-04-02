import navigate from "../services/navigate.js";

export default function createButton() {
    let button = document.querySelector(".create-button");
    button.addEventListener("click", async (e) => {
        await navigate("./create.html");
    });
}
