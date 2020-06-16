const PriorityQueue = require('./priorityQueue');
const Patient = require('./patient');

const Q = new PriorityQueue();

const b = new Patient('bipu', 5);
Q.enqueue(b);

const a = new Patient('abir', 4);
Q.enqueue(a);

const s = new Patient('sumon', 6);
Q.enqueue(s);

const t = new Patient('tuhin', 1);
Q.enqueue(t);

const k = new Patient('khairul', 2);
Q.enqueue(k);

const print = console.log;

let seen = Q.dequeue();

print(`Patient being treated ${seen[0].name}`);

print(`Patient waiting to be seen`);

print(Q.toString());

// another round
seen = Q.dequeue();

print(`Patient being treated ${seen[0].name}`);

print(`Patient waiting to be seen`);

print(Q.toString());

// another round
seen = Q.dequeue();

print(`Patient being treated ${seen[0].name}`);

print(`Patient waiting to be seen`);

print(Q.toString());
