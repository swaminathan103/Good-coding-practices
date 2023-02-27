def sumEvenNumbers(numbers):
    total = 0
    if numbers != None:
        for i in range(len(numbers)):
            if numbers[i] % 2 == 0:
                total += numbers[i]
        return total
    else:
        return 0

numbers = [1, 2, 3, 4, 5]

print(sumEvenNumbers(None))
print(sumEvenNumbers(numbers)) # output: 6
