function canVote(age) {
    if (age < 18) {
        return "Cannot vote, Sorry!"
    } else {
        return "You can vote!"
    }
}

console.log(canVote(17));
console.log(canVote(18));
console.log(canVote(28));
console.log(canVote(10));