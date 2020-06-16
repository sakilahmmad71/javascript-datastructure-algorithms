const insertSort = arr => {
    const arrLength = arr.length;

    for (let i = 1; i < arrLength; i++) {
        let currentElement = arr[i];

        for (var j = i - 1; j >= 0 && arr[j] > currentElement; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = currentElement;
    }

    return arr;
};

const sorted = insertSort([2, 19, 11, 18, 37, 4, 9]);

console.log(sorted);
