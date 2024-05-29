// 1. Створіть масив об'єктів users де об'єкти мають довільні властивості (наприклад, name, email, age, тощо).
// 2. Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// 3. Зробіть деструктуризацію в циклі

type Users = {
  name: string;
  email: string;
  age: number;
};

const users: Users[] = [
  { name: 'Yevhen', email: 'yevhen@gmail.com', age: 28 },
  { name: 'Alex', email: 'alex@gmail.com', age: 26 },
  { name: 'Bob', email: 'bob@example.com', age: 35 },
];

for (const { name, email, age } of users) {
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Age:', age);
  console.log('______________________');
}
