export default function getProducts() {
    try {
        const json = localStorage.getItem("products");
        if (json === null) {
            return {};
        }
        const products = JSON.parse(json);
        let value = document.querySelector(".sort-attributes")?.value;
        if (!value) return products;
        let convertedArray = Object.entries(products ?? {});
        console.log(value, convertedArray);
        convertedArray.sort((a, b) => {
            if (typeof a[1][value] === "string")
                return a[1][value].localeCompare(b[1][value]);
            return a[1][value] - b[1][value];
        });
        return Object.fromEntries(convertedArray);
    } catch (e) {
        console.error(e);
    }
}
