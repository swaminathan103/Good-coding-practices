function sumEvenNumbers(numbers) {
    var total = 0;
    if (numbers == null) return 0
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            total += numbers[i];
        }
    }
    return total;
}

var numbers = [1, 2, 3, 4, 5];

console.log(sumEvenNumbers(null));
console.log(sumEvenNumbers(numbers));  // output: 6"