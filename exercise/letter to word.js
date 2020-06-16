// class Letter {
//     constructor() {
//         this.letters = [];
//     }

//     addLetter(letter) {
//         return this.letters.push(letter);
//     }

//     showWord() {
//         return this.letters.reduce((current, next) => current + next);
//     }
// }

// const letter = new Letter();

// letter.addLetter('s');
// letter.addLetter('a');
// letter.addLetter('k');
// letter.addLetter('i');
// letter.addLetter('l');

// console.log(letter.showWord());

const letters = [];

const addLetter = letter => letters.push(letter);

const showWord = () => letters.reduce((current, next) => current + next);

addLetter('s');
addLetter('a');
addLetter('k');
addLetter('i');
addLetter('l');

console.log(showWord());
