// Завдання 2

// Створіть функцію яка приймає один параметр: age.
// Усередині функції перевірте, чи age більше або рівне 18.
// Якщо age відповідає умові, поверніть true, інакше поверніть false.
// Викличте вашу функцію з аргументами 25 і 15, і виведіть результат(чи є особа дорослою) в консоль для кожного випадку.

function isAdult(age: number): boolean | string {
	if (age < 0) {
		return "Error: Age must be a non-negative number"
	}
	return age >= 18
};

console.log(isAdult(25))
console.log(isAdult(15))
console.log(isAdult(17))
console.log(isAdult(-17))
