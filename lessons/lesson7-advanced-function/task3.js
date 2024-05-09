// Завдання 3

// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції.У разі,
// 	якщо denominator дорівнює 0
// або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// 	Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

function divide(numerator, denominator) {
	if (typeof numerator !== "number" || typeof denominator !== "number") {
		throw new Error("Both numerator and denominator must be numbers.");
	}

	if (denominator === 0) {
		throw new Error("Denominator cannot be zero.");
	}

	return numerator / denominator;
}

// Correct numbers
try {
	const result = divide(10, 2); // 5
	console.log("Result:", result);
} catch (error) {
	console.error(error.message);
} finally {
	console.log("Work completed.");
}

// Виклик 2: denominator === 0
try {
	const result = divide(10, 0);
	console.log("Result:", result);
} catch (error) {
	console.error(error.message); // "Denominator cannot be zero."
} finally {
	console.log("Work completed.");
}

// Виклик 3: numerator != number
try {
	const result = divide("test", 2);
	console.log("Result:", result);
} catch (error) {
	console.error(error.message); // "Both numerator and denominator must be numbers."
} finally {
	console.log("Work completed.");
}

// Виклик 4: denominator != number
try {
	const result = divide(10, "test");
	console.log("Result:", result);
} catch (error) {
	console.error(error.message); // "Both numerator and denominator must be numbers."
} finally {
	console.log("Work completed.");
}