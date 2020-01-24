const $ = require ('jquery');
/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */

//**************** Create table/loadMovies Function Start***************//
const {getMovies, addMovie, deleteMovie} = require('./api.js');
const loadMovies = () => {
  $('#table').html(' <div class="row"><div class="column">id</div><div class="column">Heading</div><div class="column">Rating</div><div class="column">Delete</div></div>');
  // const {getMovies} = require('./api.js');
  getMovies().then((movies) => {
    console.log('Here are all the movies:');
    movies.forEach(({title, rating, id}) => {
      console.log(`id#${id} - ${title} - rating: ${rating}`);
      // $('.container').html('<p>' + `#${id} - ${title} - rating: ${rating}` + "</p>");
      $('#table').append('<div class="row"><div class="column">' + `${id}` + '</div><div class="column">' + ' ' + `${title}` + '</div><div class="column">' + `${rating}` + '</div><div class="column"> <button class="buttons" value=' +  `${id}` + '> X </button></div></div>')
    });
  }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
  });
};
loadMovies();
//****************Create table/loadMovies Function End***************//


//****************addMovies Function Start***************//
$('#updateButton').click(function(){
  loader();

  const userInput = {title: $('#updateMovie').val(), rating: $('#newRating').val()};

  addMovie(userInput);
  loadMovies();
});
//****************addMovies Function End***************//


//****************deleteMovies Function Start***************//
$("#table").on('click', '.buttons', function(event){
  let id = $(event.target).val();
  console.log(id);
  setTimeout(function () {
    loader()
  },1250);
  deleteMovie(id).then(function(){
    loadMovies();
  });
});
//****************deleteMovies Function End***************//


// //************Loader Start************//
let delayContainer = $('.container').hide();
let loader = () =>{ $('.loader').show().hide(1350);};
loader();
// // //************Loader End************//









