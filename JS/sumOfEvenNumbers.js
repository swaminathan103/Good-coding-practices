
function sumEvenNumbers(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        // Check if the remainder is zero when divided by 2
        if (numbers[i] % 2 == 0) {
            total += numbers[i];
        }
    }
    return total;
}

var numbers = [1, 2, 3, 4, 5];

// console.log(sumEvenNumbers(null));
console.log(sumEvenNumbers(numbers));  // output: 6"
