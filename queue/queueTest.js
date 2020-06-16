const Queue = require('./Queue');

const print = console.log;

const q = new Queue();

q.enqueue('sakil');
q.enqueue('abir');
q.enqueue('sumon');
q.enqueue('fahmida');
q.enqueue('mitu');

print(q.front());
print(q.back());
