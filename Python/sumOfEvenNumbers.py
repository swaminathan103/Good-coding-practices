def sumEvenNumbers(numbers):
    total = 0
    for i in range(len(numbers)):
        # Check if the remainder is zero when divided by 2
        if numbers[i] % 2 == 0:
            total += numbers[i]
    return total

numbers = [1, 2, 3, 4, 5]

# print(sumEvenNumbers(None))
print(sumEvenNumbers(numbers))  # output: 6
