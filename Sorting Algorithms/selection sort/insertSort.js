const insertSort = arr => {
    const arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let lowest = i;

        for (let j = i + 1; j < arrLength; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }

        if (i !== lowest) {
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
        }
    }

    return arr;
};

const sorted = insertSort([0, 1, 21, 31, 2, 18, 90, 34, 11]);

console.log(sorted);
