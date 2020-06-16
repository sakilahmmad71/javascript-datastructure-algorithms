const Stack = require('../Stack');

const newStack = new Stack();

const isPalindrome = word => {
    const words = word.split('');
    words.forEach(word => {
        newStack.push(word);
    });
    let reverseWord = '';
    words.forEach(word => {
        reverseWord += newStack.pop();
    });

    return word === reverseWord ? true : false;
};

console.log(isPalindrome('racecar'));
