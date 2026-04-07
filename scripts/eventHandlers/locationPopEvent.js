import navigate from "../services/navigate.js";

export default function locationPopEvent() {
    window.addEventListener("popstate", (event) => {
        navigate(location.pathname, false);
    });
}
