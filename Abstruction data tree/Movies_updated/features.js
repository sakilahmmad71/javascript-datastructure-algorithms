const { readFileSync } = require('fs');

const moviesList = readFileSync('./movieList.txt', 'utf-8');
const movies = [];

const allmovies = moviesList.split('\n');
allmovies.forEach(movie => {
    movies.push(movie.trim());
});

const findItemIndex = (source, item) => {
    const index = source.findIndex(find => find === item);
    return index ? index : -1;
};

module.exports = { movies, findItemIndex };
