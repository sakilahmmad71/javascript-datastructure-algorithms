class PriorityQueue {
    constructor() {
        this.dataStore = [];
    }

    enqueue(item) {
        return this.dataStore.push(item);
    }

    dequeue() {
        let priority = this.dataStore[0].code;
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i].code < priority) {
                priority = i;
            }
        }
        return this.dataStore.splice(priority, 1);
    }

    length() {
        return this.dataStore.length;
    }

    display() {
        return this.dataStore;
    }

    front() {
        return this.dataStore[0];
    }

    back() {
        return this.dataStore[this.dataStore.length - 1];
    }

    toString() {
        let str = '';
        for (let i = 0; i < this.dataStore.length; ++i) {
            str += `name : ${this.dataStore[i].name} code : ${this.dataStore[i].code}\n`;
        }
        return str;
    }

    empty() {
        if (this.dataStore.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = PriorityQueue;
