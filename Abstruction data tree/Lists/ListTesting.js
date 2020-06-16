const List = require('./List');

// CUSTOMISE THE DEFAULT CONSOLE.LOG
const print = console.log;

const todo = new List();

todo.addItemToList('javascript');
todo.addItemToList('coffee');
todo.addItemToList('programming');
todo.addItemToList('rest');
todo.addItemToList('playground');
todo.addItemToList('mobile');
todo.addItemToList('coding');

print(todo.toString());

// todo.removeItemFromList('programming');

// print(todo.toString());

// print(todo.length());

// todo.insertItemIntoList('coffee', 'vscode');

// print(todo.toString());

// todo.doesContain('coffee');

// todo.moveTo(3);

// print(todo.getElement());

// todo.next();

// print(todo.getElement());

// todo.prev();
// todo.prev();

// print(todo.getElement());

// todo.front();

// print(todo.getElement());

// todo.end();

// print(todo.getElement());

// todo.removeAllItems();

// print(todo.toString());

for (todo.front(); todo.currentPos() < todo.length(); todo.next()) {
    print(todo.getElement());
}
