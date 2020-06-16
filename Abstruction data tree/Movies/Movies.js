const { movies, findMovieIndex } = require('./moviesLogic');

class Movies {
    constructor() {
        this.moviesList = movies;
        this.listSize = movies.length;
        this.position = 0;
    }

    display() {
        return this.moviesList;
    }

    length() {
        return this.listSize;
    }

    addNewMovieIntoList(movie) {
        return (this.moviesList[this.listSize++] = movie);
    }

    addMovieAtPosition(after, movie) {
        const movieIndex = findMovieIndex(this.moviesList, after);
        if (movieIndex > -1) {
            this.moviesList.splice(movieIndex + 1, 0, movie);
            ++this.listSize;
            return true;
        } else {
            return console.log(`does not found - ${after}`);
        }
    }

    removeMovieFromList(movie) {
        const movieIndex = findMovieIndex(this.moviesList, movie);
        if (movieIndex > -1) {
            this.moviesList.splice(movieIndex, 1);
            --this.listSize;
            return true;
        } else {
            return console.log(`does not found - ${movie}`);
        }
    }

    removeAllMovies() {
        this.moviesList = [];
        this.listSize = 0;
    }

    containsMovie(movie) {
        const movieIndex = findMovieIndex(this.moviesList, movie);
        if (movieIndex > -1) {
            return console.log(`Movie found - ${movie} at index ${movieIndex}`);
        } else {
            return console.log(`does not found - ${movie}`);
        }
    }

    front() {
        return (this.position = 0);
    }

    end() {
        return (this.position = this.listSize - 1);
    }

    current() {
        return this.position;
    }

    prev() {
        if (this.position > 0) {
            return --this.position;
        }
    }

    next() {
        if (this.position >= 0 && this.position < this.listSize - 1) {
            return ++this.position;
        }
    }

    moveTo(pos) {
        return (this.position = pos);
    }

    getElement() {
        return this.moviesList[this.position];
    }
}

module.exports = Movies;
