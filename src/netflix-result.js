export default function netflixResult(element, movieTitle) {



// console.log(movieTitle);
  const later = fetch(`http://netflixroulette.net/api/api.php?title=${movieTitle}`)
    //wait for a response back and turn the string of JSON in to actual JS object
    .then((res) => res.json())
    //Once we have a JS object to work with, here is what we're gonna do with it
    .then((data) => {
      //how do I know what data is??
      // console.log(data);



      const movieName = element.querySelector('.movie-title');
      movieName.innerText = data.show_title;

      const movieGenre = element.querySelector('.genre');
      movieGenre.innerText = data.category;

      const movieRating = element.querySelector('.movie-rating');
      movieRating.innerText = data.rating;

      const movieImage = element.querySelector('.movie-image');
      movieImage.src = data.poster;

      const movieSummery = element.querySelector('.summary-info');
      movieSummery.innerText = data.summary;

      const movieActors = element.querySelector('.actors-info');
      movieActors.innerText = data.show_cast;

    });

}
