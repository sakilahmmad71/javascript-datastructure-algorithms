const fibonacci = n => {
    if (n === 1) {
        return 0;
    }

    if (n === 2) {
        return 1;
    }

    let a = 0,
        b = 1,
        sum;

    for (let i = 3; i <= n; i++) {
        sum = a + b;

        a = b;
        b = sum;
    }

    return sum;
};

const runFib = num => {
    for (let i = 1; i <= num; i++) {
        console.log(`${i} : ${fibonacci(i)}`);
    }
};

runFib(11);
