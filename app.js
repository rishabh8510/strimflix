// DOM Elements
const nav = document.querySelector('.nav');
const profileBtn = document.querySelector('.profile-btn');
const profileMenu = document.querySelector('.profile-menu');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close');
const modalCloseBtnBottom = document.querySelector('.modal-close-btn');
const heroImg = document.querySelector('.hero-img');
const heroTitle = document.querySelector('.hero-title');
const heroOverview = document.querySelector('.hero-overview');
const contentRows = document.querySelector('.content-rows');

// State
let isMuted = true;
let selectedMovie = null;

// Event Listeners
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 0);
});

profileBtn.addEventListener('click', () => {
  const isHidden = profileMenu.style.display === 'none';
  profileMenu.style.display = isHidden ? 'block' : 'none';
  profileBtn.parentElement.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!profileBtn.contains(e.target) && !profileMenu.contains(e.target)) {
    profileMenu.style.display = 'none';
    profileBtn.parentElement.classList.remove('active');
  }
});

[modalCloseBtn, modalCloseBtnBottom].forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'none';
    const modalTrailer = modal.querySelector('iframe');
    modalTrailer.src = ''; // Reset trailer when closing modal
  });
});

// Initialize Hero Section
function initializeHero() {
  const featuredMovie = MOVIES[0];
  heroImg.src = featuredMovie.backdrop_path;
  heroImg.alt = featuredMovie.title;
  heroTitle.textContent = featuredMovie.title;
  heroOverview.textContent = featuredMovie.overview;
}

// Create Movie Rows
function createMovieRows() {
  const movieRows = [
    { title: "Trending Now", movies: [...MOVIES] },
    { title: "Popular Movies", movies: [...MOVIES].reverse() },
    { title: "Top Rated", movies: [...MOVIES].sort(() => Math.random() - 0.5) },
    { title: "Upcoming Releases", movies: [...MOVIES].sort(() => Math.random() - 0.5) }
  ];

  contentRows.innerHTML = ''; // Clear existing content

  movieRows.forEach((row, rowIndex) => {
    const rowElement = document.createElement('div');
    rowElement.className = 'movie-row';
    rowElement.innerHTML = `
      <div class="row-header">
        <h2 class="row-title">${row.title}</h2>
      </div>
      <div class="row-content">
        <div id="movie-row-${rowIndex}" class="movies-slider">
          ${row.movies.map(movie => createMovieCard(movie)).join('')}
        </div>
        <button class="slider-btn prev" onclick="scrollRow('left', ${rowIndex})">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button class="slider-btn next" onclick="scrollRow('right', ${rowIndex})">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    `;
    contentRows.appendChild(rowElement);
  });
}

// Create Movie Card
function createMovieCard(movie) {
  return `
    <div class="movie-card">
      <div class="movie-poster">
        <img src="${movie.poster_path}" alt="${movie.title}">
        <div class="movie-overlay">
          <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-actions">
              <button class="btn btn-icon" onclick="handlePlay(${movie.id})">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </button>
              <button class="btn btn-icon" onclick="handleMoreInfo(${movie.id})">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Handle Play Button Click
function handlePlay(movieId) {
  const movie = MOVIES.find(m => m.id === movieId);
  if (movie) {
    showMovieDetails(movie);
  }
}

// Handle More Info Button Click
function handleMoreInfo(movieId) {
  const movie = MOVIES.find(m => m.id === movieId);
  if (movie) {
    showMovieDetails(movie);
  }
}

// Show Movie Details Modal
function showMovieDetails(movie) {
  selectedMovie = movie;
  const modalBackdrop = modal.querySelector('.modal-backdrop');
  const modalTitle = modal.querySelector('.modal-title');
  const modalRating = modal.querySelector('.rating-value');
  const modalReleaseDate = modal.querySelector('.release-date');
  const modalDuration = modal.querySelector('.duration');
  const modalGenreTags = modal.querySelector('.genre-tags');
  const modalOverview = modal.querySelector('.modal-overview');
  const modalTrailer = modal.querySelector('iframe');

  modalBackdrop.src = movie.backdrop_path;
  modalBackdrop.alt = movie.title;
  modalTitle.textContent = movie.title;
  modalRating.textContent = `${movie.vote_average}/10`;
  modalReleaseDate.textContent = movie.release_date;
  modalDuration.textContent = movie.duration;
  modalGenreTags.innerHTML = movie.genre
    .map(genre => `<span class="genre-tag">${genre}</span>`)
    .join('');
  modalOverview.textContent = movie.overview;
  modalTrailer.src = movie.trailer;

  modal.style.display = 'block';
}

// Scroll Movie Row
function scrollRow(direction, rowIndex) {
  const row = document.getElementById(`movie-row-${rowIndex}`);
  if (row) {
    const scrollAmount = direction === 'left' ? -400 : 400;
    row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// Toggle Mute
function toggleMute() {
  isMuted = !isMuted;
  const volumeIcon = document.querySelector('.volume-icon');
  volumeIcon.innerHTML = isMuted
    ? '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>'
    : '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initializeHero();
  createMovieRows();
});