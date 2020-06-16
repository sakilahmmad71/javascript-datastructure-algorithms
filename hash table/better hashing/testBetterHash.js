const BetterHash = require('./betterHash');

const Bhash = new BetterHash();

const names = ['Kahinoor', 'Laizu', 'Sonia'];

for (let i = 0; i < names.length; i++) {
    Bhash.putData(names[i]);
}

Bhash.showTable();
