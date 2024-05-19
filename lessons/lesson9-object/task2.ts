// 1. Створіть об'єкт book з такими властивостями:
// 	- title: рядок, представляє назву книги.
// 	- author: рядок, представляє автора книги.
// 	- year: число, представляє рік видання книги.
// 2. Деструктуризуйте назву та автора книги з об'єкта book.
// 3. Виведіть деструктуризовані змінні в консоль

type Book = {
	title: string;
	author: string;
	year: number
};

const book: Book = {
	title: "Software Testing - Base Course ",
	author: "Svyatoslav Kulikov",
	year: 2015
};

const { title, author } = book;

console.log(`Title - ${title}`);
console.log(`Author - ${author}`);