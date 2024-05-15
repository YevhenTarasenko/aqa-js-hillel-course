
function countDown(num: number): void {
	if (num < 0) {
		console.log("Error: Num must be a non-negative number")
		return
	}

	console.log(num)

	if (num > 0) {
		countDown(num - 1)
	}
};

countDown(5)