const Node = require('./node');

class DoublyLinedList {
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
        newNode.previous = currentNode;
        currentNode.next = newNode;
    }

    remove(item) {
        let currentNode = this.find(item);

        if (!(currentNode.next === null)) {
            currentNode.previous.next = currentNode.next;
            currentNode.next.previous = currentNode.previous;
            currentNode.next = null;
            currentNode.previous = null;
        }
    }

    display() {
        let currentNode = this.head;

        while (!(currentNode.next === null)) {
            console.log(currentNode.next.element);
            currentNode = currentNode.next;
        }
    }

    findLast() {
        let currentNode = this.head;

        while (!(currentNode.next === null)) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    dispReverse() {
        let currentNode = this.head;
        currentNode = this.findLast();

        while (!(currentNode.previous === null)) {
            console.log(currentNode.element);
            currentNode = currentNode.previous;
        }
    }
}

module.exports = DoublyLinedList;
