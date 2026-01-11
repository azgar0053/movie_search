async function searchMovies() {
  const query = document.getElementById('movieInput').value.trim();
  const movieList = document.getElementById('movieList');
  const errorMsg = document.getElementById('errorMessage');
  movieList.innerHTML = '';
  errorMsg.textContent = '';

  if (!query) {
    errorMsg.textContent = 'Please enter a movie name!';
    return;
  }

  const API_KEY = 'YOUR_API_KEY'; //
  const URL = `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;

  try {
    const res = await fetch(URL);
    const data = await res.json();

    if (data.Response === "False") {
      errorMsg.textContent = data.Error || 'No movies found!';
      return;
    }

    data.Search.forEach(movie => {
      movieList.innerHTML += `
        <div class="movie-card">
          <div class="card-inner" id="card-${movie.imdbID}">
            <div class="card-front">
              <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/300x500'}"
                onerror="this.src='https://placehold.co/300x500';">
              <div class="overlay">
                <div class="movie-title">${movie.Title}</div>
                <div class="movie-year">${movie.Year}</div>
              </div>
              <div class="details-btn-container">
                <button onclick="flipCard('${movie.imdbID}')">Show Details</button>
              </div>
            </div>

            <div class="card-back" id="back-${movie.imdbID}" 
              style="background-image: url('${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}');">
              <div class="back-content" id="back-content-${movie.imdbID}"></div>
              <div class="details-btn-container">
                <button onclick="flipCard('${movie.imdbID}')">Back</button>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  } catch {
    errorMsg.textContent = 'Error fetching data!';
  }
}

async function flipCard(imdbID) {
  const card = document.getElementById(`card-${imdbID}`);
  const backContent = document.getElementById(`back-content-${imdbID}`);

  if (!backContent.innerHTML) {
    const API_KEY = 'YOUR_API_KEY';
    const URL = `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`;
    const res = await fetch(URL);
    const movie = await res.json();

    backContent.innerHTML = `
      <p><strong>Genre:</strong> ${movie.Genre}</p>
      <p><strong>Runtime:</strong> ${movie.Runtime}</p>
      <p><strong>Rated:</strong> ${movie.Rated}</p>
      <p><strong>Released:</strong> ${movie.Released}</p>
      <p><strong>Director:</strong> ${movie.Director}</p>
      <p><strong>Actors:</strong> ${movie.Actors}</p>
      <p><strong>Plot:</strong> ${movie.Plot}</p>
    `;
  }

  card.classList.toggle("flipped");
}

