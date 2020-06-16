const { filterInputItem } = require('./features');

class Movie {
    constructor(movie) {
        this.movie = movie;
        this.people = [];
        this.peopleSize = 0;
        this.movieList = [this.movie, this.people];
    }

    addPeople(person) {
        if (filterInputItem(person)) {
            const index = this.people.findIndex(index => index === person);

            if (index > -1) {
                console.log(`"${person}" already in the lists.`);
            } else {
                this.people[this.peopleSize] = person.trim();
                this.peopleSize++;
            }
        } else {
            console.log(`Person name should be a string.`);
        }
    }

    insertPeopleFirst(person) {
        if (filterInputItem(person)) {
            this.people.unshift(person);
            this.peopleSize++;
        } else {
            console.log(`Person name should be a string.`);
        }
    }

    insertPeopleLast(person) {
        if (filterInputItem(person)) {
            this.people.push(person);
            this.peopleSize++;
        } else {
            console.log(`Person name should be a string.`);
        }
    }

    removePeople(person) {
        const index = this.people.findIndex(index => index === person);

        if (index > -1) {
            this.people.splice(index, 1);
            this.peopleSize--;
        } else {
            console.log(`"${person}" doesn't found in the lists.`);
        }
    }

    removePeopleFirst() {
        this.people.shift();
        this.peopleSize--;
    }

    removePeopleLast() {
        this.people.pop();
        this.peopleSize--;
    }

    updatePeople(person, updatedPerson) {
        const index = this.people.findIndex(index => index === person);

        if (index > -1) {
            this.people.splice(index, 1);
            this.people.splice(index, 0, updatedPerson);
        } else {
            console.log(`"${person}" to be update doesn't found in the lists.`);
        }
    }

    toString() {
        this.people.forEach((data, index) => console.log(`${index + 1} : ${data}`));
    }

    showIndexElement(index) {
        if (typeof index === 'string' || typeof index === null) {
            console.log(`Please ensure index type is number.`);
        } else {
            return this.people[index - 1];
        }
    }

    updateMovie(movie, updatedMovie) {
        if (this.movie === movie) {
            this.movie = updatedMovie;
        } else {
            console.log(`"${movie}" to be update doesn't found in the lists.`);
        }
    }
}

module.exports = Movie;
