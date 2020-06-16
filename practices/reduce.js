const words = ['the', 'quick', 'brown', 'fox'];

const sentence = words.reduce((current, next) => current + next);

console.log(sentence);
