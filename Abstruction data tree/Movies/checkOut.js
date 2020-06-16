const Movies = require('./Movies');
const Customer = require('./Customer');
const { findMovieIndex } = require('./moviesLogic');

const newMovie = new Movies();
const newCustomer = new Customer();

const checkOutMovie = (name, movie) => {
    newCustomer.addCustomer(name);

    const movieIndex = findMovieIndex(newMovie.moviesList, movie);
    const customerIndex = findMovieIndex(newCustomer.customres, name);

    console.log(`${newCustomer.customres[customerIndex]} - ${newMovie.moviesList[movieIndex]}`);

    newMovie.removeMovieFromList(movie);
};

module.exports = checkOutMovie;
