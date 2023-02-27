def sumEvenNumbers(numbers):
    if numbers == None:
        return 0
    total = 0
    for i in range(len(numbers)):
        if numbers[i] % 2 == 0:
            total += numbers[i]
    return total

numbers = [1, 2, 3, 4, 5]

print(sumEvenNumbers(None))
print(sumEvenNumbers(numbers)) # output: 6
