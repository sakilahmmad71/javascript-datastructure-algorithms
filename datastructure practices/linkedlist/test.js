const Linkedlist = require('./linklist');

const linkedlist = new Linkedlist();

//  linkedlist.create(newItem, oldItem;

linkedlist.create('mobile', 'head');
linkedlist.create('laptop', 'mobile');
linkedlist.create('pc', 'laptop');
linkedlist.create('monitor', 'pc');

linkedlist.remove('laptop');

linkedlist.display();
