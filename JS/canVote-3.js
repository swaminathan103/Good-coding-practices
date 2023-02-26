function canVote(age) {
    if (age == null) return "Oops!, age is not passed"
    if (age < 18) return "Cannot vote, Sorry!"
    return "You can vote!"
}

console.log(canVote(null));
console.log(canVote(17));
console.log(canVote(18));
console.log(canVote(28));
console.log(canVote(10));