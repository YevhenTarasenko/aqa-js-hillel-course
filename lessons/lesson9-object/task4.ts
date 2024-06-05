// 1. Створіть об'єкт person з такими властивостями:
// 	- firstName: рядок, представляє ім'я особи.
// 	- lastName: рядок, представляє прізвище особи.
// 	- age: число, представляє вік особи.
// 2. Додайте до об'єкта person властивість email, яка буде містити електронну пошту особи.
// 3. Видаліть властивість age з об'єкта person.
// 4. Виведіть оновлений об'єкт person в консоль.

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
};

const person: Person = {
  firstName: 'Yevhen',
  lastName: 'Tarasenko',
  age: 28,
};

person.email = 'yevhen@gmail.com';

delete person.age;

console.log(person);
