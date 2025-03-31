// Global movies array
const movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 }
];

// Function to add a movie
function addMovies() {
    const title = document.getElementById('title').value.trim();
    const genre = document.getElementById('genre').value.trim();
    const rating = parseFloat(document.getElementById('rating').value);
    const releaseYear = parseInt(document.getElementById('releaseYear').value);

    if (!title || !genre || isNaN(rating) || isNaN(releaseYear)) {
        alert('Please enter valid movie details.');
        return;
    }

    const newMovie = { title, genre, rating, releaseYear };
    movies.push(newMovie);
    alert('Movie added successfully!');
}

// Function to list movies by genre
function listMoviesByGenre() {
    const genre = document.getElementById('genreInput').value.trim();
    if (!genre) {
        alert('Please enter a genre.');
        return;
    }

    const filteredMovies = movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    const outputDiv = document.getElementById('genreOutput');
    outputDiv.innerHTML = filteredMovies.length > 0
        ? filteredMovies.map(movie => `${movie.title} (${movie.releaseYear}) - Rating: ${movie.rating}`).join('<br>')
        : 'No movies found in this genre.';
}

// Function to find the highest-rated movie
function findHighestRatedMovie() {
    if (movies.length === 0) {
        alert('No movies in the collection.');
        return;
    }

    const highestRated = movies.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest, movies[0]);
    const outputDiv = document.getElementById('highestRatedOutput');
    outputDiv.innerText = `Highest Rated Movie: ${highestRated.title} (${highestRated.releaseYear}) - Rating: ${highestRated.rating}`;
}

// Function to get movie titles
function getMovieTitles() {
    if (movies.length === 0) {
        alert('No movies in the collection.');
        return;
    }

    const titles = movies.map(movie => movie.title);
    const outputDiv = document.getElementById('titlesOutput');
    outputDiv.innerText = `Movies: ${titles.join(', ')}`;
}

// Function to list movies after a certain year
function moviesAfterYear() {
    const year = parseInt(document.getElementById('yearInput').value);
    if (isNaN(year)) {
        alert('Please enter a valid year.');
        return;
    }

    const filteredMovies = movies.filter(movie => movie.releaseYear > year);
    const outputDiv = document.getElementById('afterYearOutput');
    outputDiv.innerHTML = filteredMovies.length > 0
        ? filteredMovies.map(movie => `${movie.title} (${movie.releaseYear}) - Rating: ${movie.rating}`).join('<br>')
        : 'No movies found after this year.';
}

// Function to clear the displayed output
function clearOutput(sectionId) {
    document.getElementById(sectionId).innerText = '';
}