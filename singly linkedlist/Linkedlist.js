const Node = require('./Node');

class Linklist {
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

    insert(newElement, item) {
        const newNode = new Node(newElement);
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
}

module.exports = Linklist;
