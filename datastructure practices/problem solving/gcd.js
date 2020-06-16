const gcd = (a, b) => {
    while (true) {
        const r = a % b;

        if (r === 0) {
            break;
        } else {
            a = b;
            b = r;
        }
    }
    return b;
};

const gcdLoop = (a, b) => {
    while (true) {
        const r = a % b;
        a = b;
        b = r;

        if (b === 0) {
            break;
        }
    }
    return a;
};

const gcdRecursion = (a, b) => {
    if (b === 0) {
        return a;
    }
    return gcdRecursion(b, a % b);
};

console.log(gcdRecursion(56, 12));
