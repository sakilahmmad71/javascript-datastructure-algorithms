const Movie = require('./Movie');

const movie = new Movie('The guardian of the galaxy');

movie.addPeople('sakil mahmud');
movie.addPeople('salim hawlader');
movie.addPeople('kamrul hawlader');
movie.addPeople('Abdur rahim');
movie.addPeople('Fulmiah hawlader');

console.log(movie.movieList);

console.log(movie.toString());

console.log(movie.showIndexElement(3));

movie.updateMovie('The guardian of the galaxy', 'Pirates of carribian');

console.log(movie.movieList);
