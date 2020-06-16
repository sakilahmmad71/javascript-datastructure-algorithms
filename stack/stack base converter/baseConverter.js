const Stack = require('../Stack');

const newStack = new Stack();

const convertBase = (number, base) => {
    do {
        newStack.push(number % base);
        number = Math.floor((number /= base));
    } while (number > 0);

    let convert = '';
    const n = newStack.length();
    for (let i = 0; i < n; i++) {
        convert += newStack.pop();
    }
    return convert;
};

const binary = convertBase(32, 16);
console.log(binary);
