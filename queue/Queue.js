class Queue {
    constructor() {
        this.names = [];
    }

    enqueue(item) {
        return this.names.push(item);
    }

    dequeue() {
        return this.names.shift();
    }

    length() {
        return this.names.length;
    }

    display() {
        return this.names;
    }

    front() {
        return this.names[0];
    }

    back() {
        return this.names[this.names.length - 1];
    }

    toString() {
        let str = '';
        this.names.forEach(name => {
            return (str += name + '\n');
        });
        return str;
    }

    empty() {
        if (this.names.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Queue;
