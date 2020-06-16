const List = require('./List');

const list = new List();

list.insert('Home work');
list.insert('A new task added into the stack');
list.insert('Task done');
list.insert('Turn on internet');
list.insert('Clean room');

console.log(list.toString());

console.log(list.showIndexElement(3));
