const Node = require('./node');

class Linkedlist {
    constructor() {
        this.head = new Node('head');
    }

    // For inserting an element at first we need to find the element at specific position position.
    find(item) {
        let currentNode = this.head;

        while (currentNode.element !== item) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    create(newElement, item) {
        let newNode = new Node(newElement);
        let currentNode = this.find(item);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    display() {
        let currentNode = this.head;

        while (!(currentNode.next === null)) {
            console.log(currentNode.next.element);
            currentNode = currentNode.next;
        }
    }

    findPrev(item) {
        let currentNode = this.head;

        while (!(currentNode.next === null) && currentNode.next.element !== item) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    remove(item) {
        let prevNode = this.findPrev(item);

        if (!(prevNode.next === null)) {
            prevNode.next = prevNode.next.next;
        }
    }

    update(item, newItem) {
        let currentNode = this.find(item);
        currentNode.element = newItem;
    }
}

module.exports = Linkedlist;
