const Linkedlist = require('./Linkedlist');

const linkedlist = new Linkedlist();

linkedlist.insert('mobile', 'head');
linkedlist.insert('laptop', 'mobile');
linkedlist.insert('money bag', 'laptop');
linkedlist.insert('books', 'money bag');

linkedlist.remove('books');

linkedlist.display();
