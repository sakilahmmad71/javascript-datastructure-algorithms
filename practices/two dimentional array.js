const grades = [
    [40, 55, 81],
    [86, 49, 77],
    [82, 54, 92]
];

let total = 0;
let average = 0;

grades.forEach(grade => {
    grade.forEach(mark => {
        total += mark;
    });
    average = total / grade.length;
    console.log(`Average is : ${average.toFixed(2)}`);
    total = 0;
    average = 0;
});
