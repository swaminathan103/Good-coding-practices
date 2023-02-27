def sumNumbers(numbers, isEven):
    total = 0
    for num in numbers:
        if isEven and num % 2 == 0:
            total += num
        elif not isEven and num % 2 != 0:
            total += num
    return total

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print(sumNumbers(numbers, True)) # output: 30
print(sumNumbers(numbers, False)) # output: 25


