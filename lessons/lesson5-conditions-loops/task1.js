const averageGrade = 1;

if (averageGrade < 0 || averageGrade > 100 || typeof averageGrade != "number") {
	throw new Error("Користувач ввів невірні дані");
} else if (averageGrade < 60) {
	console.log("Незадовільно");
} else if (averageGrade >= 60 && averageGrade <= 70) {
	console.log("Задовільно");
} else if (averageGrade > 70 && averageGrade <= 80) {
	console.log("Добре");
} else if (averageGrade > 80 && averageGrade <= 90) {
	console.log("Дуже добре");
} else {
	console.log("Відмінно");
};