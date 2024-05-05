function calculateSquareOfRectangle(width, height) {
    if (width < 0 || height < 0) {
        return "Error: Both width and height must be a non-negative number";
    }
    return width * height;
}
;
console.log("function declaration: ".concat(calculateSquareOfRectangle(2, 4)));
var calculateSquareOfRectangle2 = function (width, height) {
    if (width < 0 || height < 0) {
        return "Error: Both width and height must be a non-negative number";
    }
    return width * height;
};
console.log("function expression: ".concat(calculateSquareOfRectangle2(3, 3)));
var calculateSquareOfRectangle3 = function (width, height) {
    if (width < 0 || height < 0) {
        return "Error: Both width and height must be a non-negative number";
    }
    return width * height;
};
console.log("arrow function: ".concat(calculateSquareOfRectangle3(4, 4)));
