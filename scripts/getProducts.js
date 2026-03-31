export default function getProducts() {
    try {
        const json = localStorage.getItem("products");
        const products = JSON.parse(json);
        return products;
    } catch (e) {
        console.error(e);
    }
}
