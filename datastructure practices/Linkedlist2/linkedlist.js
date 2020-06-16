const Node = require('./node');

class Linkedlist {
    constructor() {
        this.head = new Node('head');
    }

    find(item) {
        let currentNode = this.head;

        while (currentNode.element !== item) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    insert(newItem, item) {
        let newNode = new Node(newItem);
        let currentNode = this.find(item);

        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    findPrevious(item) {
        let currentNode = this.head;

        while (!(currentNode.next === null) && currentNode.next.element !== item) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    remove(item) {
        let prevNode = this.findPrevious(item);

        if (!(prevNode.next === null)) {
            prevNode.next = prevNode.next.next;
        }
    }

    display() {
        let currentNode = this.head;

        while (!(currentNode.next === null)) {
            console.log(currentNode.next.element);
            currentNode = currentNode.next;
        }
    }

    update(newItem, item) {
        let currentNode = this.find(item);
        currentNode.element = newItem;
    }
}

module.exports = Linkedlist;
