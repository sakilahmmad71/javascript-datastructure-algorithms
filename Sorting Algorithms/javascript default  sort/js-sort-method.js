const numbers = [23, 16, 67, 89, 2, 74, 34, 9, 5, 11, 26];
const names = ['sakil', 'bipu', 'tanmay', 'sadman', 'hasib', 'zihad', 'abir', 'sumon'];

const order = (a, b) => (a > b ? -1 : 1);
const namesOrder = (a, b) => (a.length > b.length ? 1 : -1);

const numSort = numbers.sort(order);
const nameSort = names.sort(namesOrder);

console.log(numSort);
console.log(nameSort);
