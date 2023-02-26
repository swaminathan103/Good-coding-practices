function checkNumber(number) {
    if (!number) return "Empty"
    if (number < 0) return "not a whole number"
    return "whole number"
}

console.log(checkNumber(undefined));
console.log(checkNumber(1));
console.log(checkNumber(-1));
console.log(checkNumber(0));