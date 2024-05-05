// Завдання 1

// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами(наприклад 5 і 10 і виведіть результат(площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами(function declaration, function expression, arrow function)

// function declaration
function calculateSquareOfRectangle(width: number, height: number): number | string {
	if (width < 0 || height < 0) {
		return "Error: Both width and height must be a non-negative number"
	}
	return width * height
};

console.log(`function declaration: ${calculateSquareOfRectangle(2, 4)}`);

// function expression
const calculateSquareOfRectangle2 = function (width: number, height: number): number | string {
	if (width < 0 || height < 0) {
		return "Error: Both width and height must be a non-negative number"
	}
	return width * height
};

console.log(`function expression: ${calculateSquareOfRectangle2(3, 3)}`);

// arrow function
const calculateSquareOfRectangle3 = (width: number, height: number): number | string => {
	if (width < 0 || height < 0) {
		return "Error: Both width and height must be a non-negative number"
	}
	return width * height
}

console.log(`arrow function: ${calculateSquareOfRectangle3(4, 4)}`);