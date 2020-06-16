const { filterInputItem } = require('./features');

class List {
    constructor() {
        this.dataStore = [];
        this.size = 0;
    }

    insert(item) {
        if (filterInputItem(item)) {
            const index = this.dataStore.findIndex(index => index === item);

            if (index > -1) {
                console.log(`"${item}" already in the lists.`);
            } else {
                this.dataStore[this.size] = item.trim();
                this.size++;
            }
        } else {
            console.log(`List Item should be a string.`);
        }
    }

    insertFirst(item) {
        if (filterInputItem(item)) {
            this.dataStore.unshift(item);
            this.size++;
        } else {
            console.log(`List Item should be a string.`);
        }
    }

    insertLast(item) {
        if (filterInputItem(item)) {
            this.dataStore.push(item);
            this.size++;
        } else {
            console.log(`List item should be a string.`);
        }
    }

    remove(item) {
        const index = this.dataStore.findIndex(index => index === item);

        if (index > -1) {
            this.dataStore.splice(index, 1);
            this.size--;
        } else {
            console.log(`"${item}" doesn't found in the lists.`);
        }
    }

    removeFirst() {
        this.dataStore.shift();
        this.size--;
    }

    removeLast() {
        this.dataStore.pop();
        this.size--;
    }

    update(item, updatedItem) {
        const index = this.dataStore.findIndex(index => index === item);

        if (index > -1) {
            this.dataStore.splice(index, 1);
            this.dataStore.splice(index, 0, updatedItem);
        } else {
            console.log(`"${item}" to be update doesn't found in the lists.`);
        }
    }

    toString() {
        this.dataStore.forEach((data, index) => console.log(`${index + 1} : ${data}`));
    }

    showIndexElement(index) {
        if (typeof index === 'string' || typeof index === null) {
            console.log(`Please ensure index type is number.`);
        } else {
            return this.dataStore[index - 1];
        }
    }
}

module.exports = List;
