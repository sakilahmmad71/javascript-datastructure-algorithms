const arr = ['the', 'quick', 'brown', 'fox', 'jump', 'to', 'water'];

const forward = arr.reduce((current, next) => current + ' ' + next);
console.log(forward);

const newArr = [...arr].reverse();

const backward = newArr.reduce((current, next) => current + ' ' + next);
console.log(backward);
