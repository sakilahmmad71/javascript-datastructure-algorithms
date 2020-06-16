const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = new Node('head');
        this.head.next = this.head;
    }

    find(item) {
        let currenNode = this.head;

        while (currenNode.element !== item) {
            currenNode = currenNode.next;
        }

        return currenNode;
    }

    insert(newItem, item) {
        let newNode = new Node(newItem);
        let currenNode = this.find(item);

        newNode.next = currenNode.next;
        currenNode.next = newNode;
    }

    findPrev(item) {
        let currenNode = this.head;

        while (!(currenNode.next === null) && currenNode.next.element !== item) {
            currenNode = currenNode.next;
        }

        return currenNode;
    }

    remove(item) {
        let prevNode = this.findPrev(item);

        if (!(prevNode.next === null)) {
            prevNode.next = prevNode.next.next;
        }
    }

    display() {
        let currentNode = this.head;

        while (!(currentNode.next === null) && !(currentNode.next.element === 'head')) {
            console.log(currenNode.next.element);
            currentNode = currentNode.next;
        }
    }
}

module.exports = LinkedList;
