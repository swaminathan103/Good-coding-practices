def checkNumber(number):
    if not number:
        return "Empty"
    if number < 0:
        return "not a whole number"
    return "whole number"

print(checkNumber(None))
print(checkNumber(1))
print(checkNumber(-1))
print(checkNumber(0))

