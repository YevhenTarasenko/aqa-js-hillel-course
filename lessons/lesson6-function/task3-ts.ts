// Завдання 3

// Створіть функцію checkOrder яка перевіряє можливість оформлення замовлення і повертає повідомлення про результат.Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
// 	available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Якщо товарів в наявності менше ніж замовлено — повернути рядок з повідомленням - “Your order is too large, we don’t have enough goods.”
// Якщо ordered дорівнює нулю — повернути рядок з повідомленням - “Your order is empty”
// У разі якщо товарів на складі вистачає — повернути рядок з повідомленням - “Your order is accepted”

function checkOrder(ordered: number, available: number): string {
	if ( ordered < 0 || available < 0) {
		return "Error: Both ordered and available must be non-negative numbers"
	}
	if (ordered === 0) {
		return "Your order is empty."
	}
	if (ordered > available) {
		return "Your order is too large, we don't have enough goods."
	}
	return "Your order is accepted."
}

console.log(checkOrder(10, 8)) //"Your order is too large, we don't have enough goods"
console.log(checkOrder(0, 8)) //"Your order is empty"
console.log(checkOrder(2, 8)) //"Your order is accepted"
console.log(checkOrder(-2, 8)) //"Error: Both ordered and available must be numbers and non-negative"
console.log(checkOrder(2, -8)) //"Error: Both ordered and available must be numbers and non-negative"