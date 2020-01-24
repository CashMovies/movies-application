module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },
  //****************addMovies Start***************//

  addMovie: (userInput) => {
    // const userInput = {title: $('#updateMovie').val(), rating: $('#newRating').val()};
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
  },
  //****************addMovies End***************//

  //****************deleteMovies Start***************//
  deleteMovie: (id) => {
    console.log(id);
    const url = `/api/movies/${id}`;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(id),
    };
    return fetch(url, options)
        .then(response => response.json());
  }
  //****************deleteMovies End***************//




};





