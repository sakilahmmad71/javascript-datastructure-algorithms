const Stack = require('./Stack');

const print = console.log;

const s = new Stack();

s.push(10);
s.push(11);
s.push(12);
s.push(13);
s.push(14);
s.push(15);

s.display();

s.pop();

s.display();

print(s.peek());
