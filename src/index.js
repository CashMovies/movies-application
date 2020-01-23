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
const loadMovies = () => {
  $('#table').html(' <div class="row"><div class="column">id</div><div class="column">Heading</div><div class="column">Rating</div><div class="column">Delete</div></div>');
  const {getMovies} = require('./api.js');
  getMovies().then((movies) => {
    console.log('Here are all the movies:');
    movies.forEach(({title, rating, id}) => {
      console.log(`id#${id} - ${title} - rating: ${rating}`);
      // $('.container').html('<p>' + `#${id} - ${title} - rating: ${rating}` + "</p>");
      $('#table').append('<div class="row"><div class="column">' + `${id}` + '</div><div class="column">' + ' ' + `${title}` + '</div><div class="column">' + `${rating}` + '</div><div class="column"> <input class="buttons" type="button" value="X" id='+`${id}`+'></div></div>')
    });
  }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
  });
};
loadMovies();
//****************Create table/loadMovies Function End***************//


//****************addMovies Function Start***************//
const addMovie = () => {
  const userInput = {title: $('#updateMovie').val(), rating: $('#newRating').val()};
  const url = '/api/movies';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInput),
  };
  fetch(url, options)
      .then(/* post was created successfully */)
      .catch(/* handle errors */);
  loadMovies();
};
$('#updateButton').click(function(){
  addMovie()
});
//****************addMovies Function End***************//


//****************deleteMovies Function Start***************//
// const deleteMovies = () => {
//   $('td').click(function(event){
//     event.preventDefault();
//     event.css('background-color', 'yellow');
//     // $('tr').css('background-color', 'yellow')
//     console.log('clicked')
//   });
// };
$('.buttons').click(function(e){
  e.preventDefault();
  $('.table').css({backgroundColor: 'red',});
  console.log($(this));
});


//****************deleteMovies Function End***************//







//
//
// //**************Hiding Delete Column Start****************//
// let hideColumn = $('.hide').hide();
// //**************Hiding Delete Column End****************//
//
//
//
// //************Hiding Container Div Start************//
let delayContainer = $('.container').hide();
let loader = $('.loader').hide().show(2000);
$(document).ajaxStart(function(){
  $('.loader').css('display', 'block');
});
$(document).ajaxComplete(function () {
  $('.loader').css('display', 'none');
});
// //************Hiding Container Div End************//
//
//
//
// //************Ajax Call to List Movies Start************//
//
// //************Ajax Call to List Movies End************//






