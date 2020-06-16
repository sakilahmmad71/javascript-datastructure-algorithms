const _simpleHash = new WeakMap();

class HashTable {
    constructor() {
        this.table = new Array(137);

        _simpleHash.set(this, data => {
            let total = 0;

            for (let i = 0; i < data.length; ++i) {
                total += data.charCodeAt(i);
            }

            return total % this.table.length;
        });
    }

    putData(data) {
        const position = _simpleHash.get(this)(data);
        this.table[position] = data;
    }

    showTable() {
        for (let i = 0; i < this.table.length; ++i) {
            if (this.table[i] !== undefined) {
                console.log(`${i} : ${this.table[i]}`);
            }
        }
    }
}

module.exports = HashTable;
