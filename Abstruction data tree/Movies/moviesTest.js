const Movies = require('./Movies');
const Customer = require('./Customer');
const checkOut = require('./checkOut');

// const movie = new Movies();

const print = console.log;

// print(movie.moviesList);

// print(movie.display());

// movie.addNewMovieIntoList('The jungle book');

// print(movie.display());

// print(movie.length());

// movie.addMovieAtPosition('The Dark Knight', 'The Man of Steel');

// movie.addMovieAtPosition('Star Wars', 'Bad Guys');

// movie.removeMovieFromList('Star Wars');

// movie.removeAllMovies();

// movie.containsMovie('The Man of Steel');

// print(movie.display());

// movie.moveTo(15);

// print(movie.getElement());

// const people = new Customer();

// people.addCustomer('sakil');
// people.addCustomer('abir');
// people.addCustomer('bipu');
// people.addCustomer('sumon');

// console.log(people.customerSize);

checkOut('sakil', 'Forrest Gump');
checkOut('abir', 'Star Wars');
checkOut('tuhin', 'Schindler’s List');
checkOut('bipur', 'The Godfather');
checkOut('sumon', 'Star Wars: Episode V - The Empire Strikes Back');
