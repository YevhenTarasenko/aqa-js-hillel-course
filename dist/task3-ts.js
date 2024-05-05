function checkOrder(ordered, available) {
    if (ordered < 0 || available < 0) {
        return "Error: Both ordered and available must be non-negative numbers";
    }
    if (ordered === 0) {
        return "Your order is empty.";
    }
    if (ordered > available) {
        return "Your order is too large, we don't have enough goods.";
    }
    return "Your order is accepted.";
}
console.log(checkOrder(10, 8));
console.log(checkOrder(0, 8));
console.log(checkOrder(2, 8));
console.log(checkOrder(-2, 8));
console.log(checkOrder(2, -8));
