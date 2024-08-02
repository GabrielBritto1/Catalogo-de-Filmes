document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '7134851427be2e7cb21c7d76af0b9e55';
    const baseUrl = 'https://api.themoviedb.org/3/movie/popular';
    const moviesContainer = document.getElementById('movies-container');

    let currentPage = 1;
    const totalviews = 100;

    function createMovieCard(movie) {
        const card = document.createElement('div');
        card.className = 'movie';
        card.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <div class="movie-content">
                <h2>${movie.title}</h2>
                <p>Avaliação: ${formatRating(movie.vote_average)}/10</p>
                <p>Ano: ${movie.release_date.split('-')[0]}</p>
            </div>
        `;

        moviesContainer.appendChild(card);

        card.addEventListener('click', () => {
            document.querySelectorAll('.movie').forEach(m => m.classList.remove('selected'));
            card.classList.add('selected');
        });
    }

    function formatRating(rating) {
        return rating.toFixed(1);
    }

    async function fetchMovies(page) {
        try {
            const response = await fetch(`${baseUrl}?api_key=${apiKey}&language=pt-BR&page=${page}`);
            const data = await response.json();
            console.log(data);

            if (data.results && data.results.length > 0) {
                data.results.forEach(createMovieCard);
                currentPage++;
                if (currentPage > totalviews) {
                    window.removeEventListener('scroll', handleScroll);
                }
            } else {
                console.log('Nenhum filme encontrado');
            }
        } catch (error) {
            console.error('Erro ao carregar filmes:', error);
        }
    }

    function handleScroll() {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 500) {
            if (currentPage <= totalviews) {
                fetchMovies(currentPage);
            }
        }
    }

    fetchMovies(currentPage);
    window.addEventListener('scroll', handleScroll);
});
