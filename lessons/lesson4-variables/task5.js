// Завдання 5.1

// π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа

// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius ^ 2 і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

const Pi = Math.PI;
let radius = 5;

let circleArea = Pi * radius ** 2;
console.log(`Circle area = ${circleArea.toFixed(2)}`);

// Завдання 5.2
// Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// Обчисліть площу прямокутника за формулою length * width і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

let length = 5;
let width = 5;

let rectangleArea = length * width;
console.log(`Rectangle area = ${rectangleArea.toFixed(2)}`);

// Завдання 5.3
// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

let radiusCylinder = 10;
let heightCylinder = 5;

let cylinderVolume = Pi * radiusCylinder ** 2 * heightCylinder;
console.log(`Cylinder volume = ${cylinderVolume.toFixed(2)}`);
