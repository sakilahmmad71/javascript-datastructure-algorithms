let arr1 = new Array(3);

for (let i = 0; i < 3; i++) {
    arr1[i] = new Array(3);
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        arr1[i][j] = j + i + 1;
    }
}

const print = console.log;

let str = '';

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        str += arr1[i][j];
    }
    print('\n');
}

print(str);
