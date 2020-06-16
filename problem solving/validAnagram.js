const validAnagram = (first, second) => {
    if (first.length !== second.length) {
        return false;
    }

    let lookup = {};

    const firstLen = first.length;

    for (let i = 0; i < firstLen; i++) {
        let letter = first[i];
        lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    }

    const secondLen = second.length;

    for (let i = 0; i < secondLen; i++) {
        let letter = second[i];

        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
};

console.log(validAnagram('anagram', 'naagrama'));
