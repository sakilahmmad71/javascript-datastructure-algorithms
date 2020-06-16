const { findItem, findItemIndex } = require('./listLogic');

class List {
    constructor() {
        this.dataStore = [];
        this.storesize = 0;
        this.pos = 0;
    }

    //  ADD ITEM INTO LIST
    addItemToList(item) {
        return (this.dataStore[this.storesize++] = item);
    }

    // INSERTING ITEMS INTO GIVEN POSITION
    insertItemIntoList(after, item) {
        const insertableItem = findItemIndex(this.dataStore, after);
        if (insertableItem > -1) {
            this.dataStore.splice(insertableItem + 1, 0, item);
            ++this.storesize;
            return true;
        } else {
            return console.log(`The item "${after}" does not found in list.`);
        }
    }

    // PRINTOUT ITEM LIST
    toString() {
        return this.dataStore;
    }

    // PRINT THE LENGTH OF THE LIST
    length() {
        return this.storesize;
    }

    // GIVEN VALUE CONTAINS OR NOT
    doesContain(item) {
        const containable = findItemIndex(this.dataStore, item);
        if (containable > -1) {
            return console.log(`The item "${item}" - contain in the list.`);
        } else {
            return console.log(`The item "${item}" does not found in list.`);
        }
    }

    // REMOVE ITEM FROM LIST
    removeItemFromList(item) {
        const removeableItem = findItemIndex(this.dataStore, item);
        if (removeableItem > -1) {
            this.dataStore.splice(removeableItem, 1);
            --this.storesize;
            return true;
        } else {
            return console.log(`The item "${item}" does not found in list.`);
        }
    }

    // REMOVE ALL ITEMS FROM LIST
    removeAllItems() {
        this.dataStore = [];
        this.storesize = 0;
    }

    // TRAVERSING THROUGH LISTS
    front() {
        this.pos = 0;
    }

    end() {
        this.pos = this.storesize - 1;
    }

    prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    }

    next() {
        if (this.pos < this.storesize - 1) {
            ++this.pos;
        }
    }

    currentPos() {
        return this.pos;
    }

    moveTo(position) {
        this.pos = position;
    }

    getElement() {
        return this.dataStore[this.pos];
    }
}

module.exports = List;
