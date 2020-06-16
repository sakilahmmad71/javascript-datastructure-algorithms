const DoublyLinkedList = require('./linkedlist');

const list = new DoublyLinkedList();

list.insert('mobile', 'head');
list.insert('laptop', 'mobile');
list.insert('tablet', 'laptop');
list.insert('pc', 'tablet');

list.dispReverse();
