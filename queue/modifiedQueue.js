const { readFileSync } = require('fs');
const Dancer = require('./dance pairing/Dancer');
const Queue = require('./Queue');

class ModifiedQueue extends Queue {
    super() {}

    getDancer(males, females) {
        const names = readFileSync(`${__dirname}/dancers.txt`, 'utf-8');
        const splittedNames = names.split('\n');
        const length = splittedNames.length;

        for (let i = 0; i < length; ++i) {
            splittedNames[i] = splittedNames[i].trim();
        }

        for (let i = 0; i < length; ++i) {
            const dancer = splittedNames[i].split(' ');
            const name = dancer[1];
            const sex = dancer[0];

            if (sex === 'F') {
                females.enqueue(new Dancer(name, sex));
            } else {
                males.enqueue(new Dancer(name, sex));
            }
        }
    }

    dance(males, females) {
        console.log(`The dance partners are : \n`);
        while (!males.empty() && !females.empty()) {
            let person = females.dequeue();
            console.log(`Female dancer is : ${person.name}`);
            person = males.dequeue();
            console.log(`Male dancer is : ${person.name}`);
        }
    }
}

module.exports = ModifiedQueue;
