const number = 2;

// Цикл for
if (typeof number !== 'number') {
	console.log("Введіть число!")
} else {
	console.log("Таблиця множення використовуючи цикл for:")
	for (let i = 1; i <= 10; i++) {
		console.log(`${number} * ${i} = ${number * i}`)
	};
}

// Цикл while
if (typeof number !== 'number') {
	console.log("Введіть число!")
} else {
	console.log("Таблиця множення використовуючи цикл while:")
	let j = 1;
	while (j <= 10) {
		console.log(`${number} * ${j} = ${number * j}`)
		j++
	};
}

// Цикл do while
if (typeof number !== 'number') {
	console.log("Введіть число!")
} else {
	console.log("Таблиця множення використовуючи цикл do while:")
	let o = 1;
	do {
		console.log(`${number} * ${o} = ${number * o}`)
		o++
	} while (o <= 10)
};

