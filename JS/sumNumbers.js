function sumNumbers(numbers, isEven) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (isEven && numbers[i] % 2 === 0) {
            total += numbers[i];
        } else if (!isEven && numbers[i] % 2 !== 0) {
            total += numbers[i];
        }
    }
    return total;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumNumbers(numbers, true));  // output: 30
console.log(sumNumbers(numbers, false));  // output: 25
