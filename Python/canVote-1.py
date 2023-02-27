def can_vote(age):
    if age < 18:
        return "Cannot vote, sorry!"
    else:
        return "You can vote!"

print(can_vote(17))
print(can_vote(18))
print(can_vote(28))
print(can_vote(10))

