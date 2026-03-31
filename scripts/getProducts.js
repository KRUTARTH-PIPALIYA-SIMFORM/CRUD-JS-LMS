export default function getProducts() {
    try {
        const json = localStorage.getItem("products");
        const products = JSON.parse(json);
        let value = document.querySelector(".sort-attributes").value;
        let convertedArray = Object.entries(products);
        
        convertedArray.sort((a, b) => {
            if (typeof a[1][value] === "string")
                return a[1][value].localeCompare(b[1][value]);
            return a[0][value] - b[0][value];
        });
        return convertedArray;
    } catch (e) {
        console.error(e);
    }
}
