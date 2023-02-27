def can_vote(age):
    if age is None:
        return "Oops!, age is not passed"
    if age < 18:
        return "Cannot vote, Sorry!"
    return "You can vote!"

print(can_vote(None))
print(can_vote(17))
print(can_vote(18))
print(can_vote(28))
print(can_vote(10))
