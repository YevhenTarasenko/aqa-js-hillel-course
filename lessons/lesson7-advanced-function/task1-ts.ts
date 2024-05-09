//
function handleNum(number: number, handleEven: ()=> void, handleOdd: ()=> void): void {
	number % 2 === 0 ? handleEven() : handleOdd()
};

function handleEven(): void {
	console.log("The number is even")
};

function handleOdd(): void {
	console.log("The number is odd")
};

handleNum(1, handleEven, handleOdd);
handleNum(2, handleEven, handleOdd);
handleNum(3, handleEven, handleOdd);
handleNum(0, handleEven, handleOdd);
handleNum(-1, handleEven, handleOdd);