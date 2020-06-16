const _betterHash = new WeakMap();

class BetterHashTable {
    constructor() {
        this.table = new Array(137);

        _betterHash.set(this, data => {
            const H = 37;
            let total = 0;

            for (let i = 0; i < data.length; ++i) {
                total += H * total + data.charCodeAt(i);
            }

            total = total % this.table.length;

            if (total < 0) {
                total += this.table.length - 1;
            }

            return parseInt(total);
        });
    }

    putData(data) {
        const position = _betterHash.get(this)(data);
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

module.exports = BetterHashTable;
