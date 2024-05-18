// У вас є вихідний масив const numbersList = [1, 10, 14, 2, 4, 5, 43, 34]
// Створіть новий масив на основі вихідного масиву(копіюйте його)
// Відсортуйте створений масив(від меншого до більшого)
// Виведіть обидва масиви в консоль

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedNumbersList = [...numbersList];
copiedNumbersList.sort((a, b) => a - b);
console.log("Вихідний масив:", numbersList);
console.log("Відсортований масив:", copiedNumbersList);