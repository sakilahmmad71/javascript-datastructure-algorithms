class Stack {
    constructor() {
        this.dataStore = [];
    }

    push(item) {
        return this.dataStore.push(item);
    }

    pop() {
        if (this.dataStore.length === 0) {
            return console.log('Underflow');
        } else {
            return this.dataStore.pop();
        }
    }

    peek() {
        return this.dataStore[this.dataStore.length - 1];
    }

    isEmpty() {
        return this.dataStore.length === 0;
    }

    display() {
        return console.log(this.dataStore);
    }

    length() {
        return this.dataStore.length;
    }
}

module.exports = Stack;
