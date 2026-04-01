export default function validateProduct(product = {}) {
    let lowerPrice = document.getElementById("filter-price-lowerbound").value;
    let upperPrice =
        document.getElementById("filter-price-upperbound").value ?? 100000000;
    let queryString = document.getElementById("filter-name").value ?? "";

    if (
        !(
            queryString === "" ||
            product.productName.includes(queryString.trim())
        )
    )
        return false;
    if (+product.price > upperPrice || +product.price < lowerPrice)
        return false;
    return true;
}
