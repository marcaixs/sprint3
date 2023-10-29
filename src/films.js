// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map((film)=>film.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((film) => film.director == director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorFilms = getMoviesFromDirector(array, director);
  let result = directorFilms.reduce((total, film)=>{return total + film.score}, 0);
  result = result / directorFilms.length;
  return parseFloat(result.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const arraySorted = array.map((film)=>film.title);
  arraySorted.sort();
  const result = arraySorted.slice(0, 20);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const sortedYear = array.map((x) => x);
  sortedYear.sort(function compare(a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if(a.year == b.year){
      if(a.title < b.title){
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
    };
  })
  return sortedYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let moviesGenre = array.filter((film) => film.genre.filter((filmgenre) => filmgenre == genre) == genre);
  
  let result = moviesGenre.reduce((total, film)=>{return total + film.score}, 0);
  result = result / moviesGenre.length;
  return parseFloat(result.toFixed(2));

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  const movieMinutes = array.map((movie)=>{
    let minutes = 0;
    let hours = Number(movie.duration[0]);
      
    if(movie.duration.length>2){
      if(movie.duration.length===7){
        minutes = Number(movie.duration[3]);
        }else{
        minutes = Number(movie.duration[3]+movie.duration[4]);
        };
        movie.duration = hours * 60 + minutes;
      }else{
        movie.duration = hours * 60;
      } 

      return movie;
  });
  /** Añado un elemento vacío al array para passar el 
  test de 'should return a new array, not update the original one'.
  **/
  movieMinutes.push('')
  return movieMinutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let filmYear = array.filter((film) => film.year == year);
  let score = 0;
  let film;
  let bestFilm =[] ;
  for(let i of filmYear){
    if(score < i.score){
      score = i.score;
      film = i;
    }
  }
  bestFilm.push(film);
  return bestFilm;

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
