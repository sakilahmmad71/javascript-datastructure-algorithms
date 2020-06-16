const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateStudentData = arr => {
    for (let i = 0; i < arr.length; ++i) {
        let num = '';

        for (let j = 1; j <= 9; ++j) {
            num += Math.floor(Math.random() * 10);
        }

        num += getRandomInt(50, 100);
        arr[i] = num;
    }
};

module.exports = { generateStudentData };
