const bubbleSort = arr => {
    const firstLen = arr.length;
    let noSwap;

    for (let i = firstLen; i > 0; i--) {
        noSwap = true;

        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwap = false;
            }
        }

        if (noSwap) break;
    }

    return arr;
};

const sorted = bubbleSort([36, 45, 9, 26, 11]);

console.log(sorted);
