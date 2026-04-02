export default function getProducts() {
    try {
        const json = localStorage.getItem("products");
        // return empty array if local storage is empty
        if (json === null) {
            return [];
        }
        const products = JSON.parse(json);
        console.log(products)
        let value = document.querySelector(".sort-attributes")?.value;
        if (!value) return products;
        products.sort((a, b) => {
            if (value === "price") return +a[value] - +b[value];
            else return a[value].localeCompare(b[value]);
        });
        return products;
    } catch (e) {
        console.error(e);
    }
}
