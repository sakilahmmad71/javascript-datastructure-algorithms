const people1 = {
    name: 'sakil',
    age: 20,
    profession: 'student'
};

const people2 = {
    age: 22,
    name: 'abir',
    profession: 'ex'
};

for (let key in people1) {
    if (key === people2) {
        console.log(true);
    } else {
        console.log(true);
    }
}
