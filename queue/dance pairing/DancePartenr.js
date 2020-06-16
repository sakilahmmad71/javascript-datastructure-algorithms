// const Queue = require('./Queue');

// const { getDancer, dance } = require('./getDancers');

// const maleDancer = new Queue();
// const femaleDancer = new Queue();

// getDancer(maleDancer, femaleDancer);
// dance(maleDancer, femaleDancer);

// if (!femaleDancer.empty()) {
//     console.log(`${femaleDancer.front().name} is waiting for dance`);
// }

// if (!maleDancer.empty()) {
//     console.log(`${maleDancer.front().name} is waiting for dance`);
// }

const ModifiedQueue = require('../modifiedQueue');

const queue = new ModifiedQueue();

const maleDancer = new ModifiedQueue();
const femaleDancer = new ModifiedQueue();

queue.getDancer(maleDancer, femaleDancer);
queue.dance(maleDancer, femaleDancer);

if (!femaleDancer.empty()) {
    console.log(`${femaleDancer.front().name} is waiting for dance`);
}

if (!maleDancer.empty()) {
    console.log(`${maleDancer.front().name} is waiting for dance`);
}
