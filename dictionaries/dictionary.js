class Dictionary {
    constructor() {
        this.dataStore = [];
    }

    add(key, value) {
        this.dataStore[key] = value;
    }

    find(key) {
        return this.dataStore[key];
    }

    remove(key) {
        delete this.dataStore[key];
    }

    showAll() {
        const keys = Object.keys(this.dataStore).sort();
        const values = Object.values(this.dataStore);

        for (let i = 0; i < keys.length; i++) {
            console.log(`${keys[i]} => ${values[i]}`);
        }
    }

    count() {
        let n = 0;
        for (const key in Object.keys(this.dataStore)) {
            ++n;
        }
        return n;
    }

    clear() {
        delete this.dataStore;
    }
}

module.exports = Dictionary;
