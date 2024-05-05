function isAdult(age) {
    if (age < 0) {
        return "Error: Age must be a non-negative number";
    }
    return age >= 18;
}
;
console.log(isAdult(25));
console.log(isAdult(15));
console.log(isAdult(17));
console.log(isAdult(-17));
