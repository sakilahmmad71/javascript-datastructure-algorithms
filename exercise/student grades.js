class StudentGrade {
    constructor() {
        this.grades = [];
    }

    addGrade(grade) {
        return this.grades.push(grade);
    }

    showGrade() {
        return this.grades.forEach((grade, index) =>
            console.log(`${index + 1} : ${grade}`)
        );
    }

    avegGrade() {
        const grade = this.grades.reduce((current, next) => current + next);
        return grade / this.grades.length;
    }
}

const student = new StudentGrade();

student.addGrade(56);
student.addGrade(77);
student.addGrade(71);
student.addGrade(82);
student.addGrade(64);

console.log(student.showGrade());
console.log(student.avegGrade());
