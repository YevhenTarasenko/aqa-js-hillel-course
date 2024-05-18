// 1. Створіть порожній об'єкт з ім'ям student.
// 2. Додайте до об'єкта student наступні властивості:
// 	- firstName: рядок, представляє ім'я студента.
// 	- lastName: рядок, представляє прізвище студента.
// 	- age: число, представляє вік студента.
// 	- courses: масив, представляє список курсів, які він вивчає (наприклад, ["Математика", "Історія", "Програмування"]).
// 3. Виведіть об'єкт student в консоль.

type Student = {
	firstName: string;
	lastName: string;
	age: number;
	courses: string[] 
}

const student: Student = {
	firstName: "Yevhen",
	lastName: "Tarasenko",
	age: 28,
	courses: ["Hillel Manual QA", "Hillel JS AQA"]
}

console.log(student)