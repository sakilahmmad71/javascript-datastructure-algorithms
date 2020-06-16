const Hashing = require('./hashing');

const Hash = new Hashing();

const names = ['sakil', 'saharia', 'sanju'];

for (let i = 0; i < names.length; i++) {
    Hash.putData(names[i]);
}

Hash.showTable();
