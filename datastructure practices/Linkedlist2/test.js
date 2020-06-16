const Linkedlist = require('./linkedlist');

const list = new Linkedlist();

list.insert('bread', 'head');
list.insert('foods', 'bread');
list.insert('laptop', 'foods');
list.insert('mobile', 'laptop');
list.insert('tablet', 'mobile');

list.remove('tablet');

list.display();
