class Tempweek {
    constructor() {
        this.temps = [];
    }

    addTemp(temp) {
        return this.temps.push(temp);
    }

    tempAvg() {
        const temp = this.temps.reduce((current, next) => current + next);
        return temp / this.temps.length;
    }
}

const temperature = new Tempweek();

temperature.addTemp(34);
temperature.addTemp(36);
temperature.addTemp(41);
temperature.addTemp(31);
temperature.addTemp(38);
temperature.addTemp(29);
temperature.addTemp(33);

console.log(temperature.tempAvg());
