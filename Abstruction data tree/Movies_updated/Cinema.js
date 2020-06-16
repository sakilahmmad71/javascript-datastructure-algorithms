const { movies, findItemIndex } = require('./features');

class Cinema {
    constructor() {
        this.moviesList = movies;
        this.listSize = this.moviesList.length;
        this.customersList = [];
        this.customersListSize = 0;
    }

    addMovie(movie) {
        return (this.moviesList[++this.listSize] = movie);
    }

    addCustomer(customer) {
        return (this.customersList[++this.customersListSize] = customer);
    }

    removeMovie(movie) {
        const index = findItemIndex(this.moviesList, movie);
        if (index > -1) {
            this.moviesList.splice(index, 1);
            --this.listSize;
            return true;
        } else {
            return console.log(`does not found - ${movie}`);
        }
    }

    removeCustomer(customer) {
        const index = findMovieIndex(this.customersList, customer);
        if (index > -1) {
            this.customersList.splice(index, 1);
            --this.customersListSize;
            return true;
        } else {
            return console.log(`does not found - ${customer}`);
        }
    }

    checkOut(name, movie, movieList, customerList) {
        this.addCustomer(name);
    }
}
