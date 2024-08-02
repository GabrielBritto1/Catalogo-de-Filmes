document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '7134851427be2e7cb21c7d76af0b9e55';
    const baseUrl = 'https://api.themoviedb.org/3/tv/popular';
    const seriesContainer = document.getElementById('series-container');

    let currentPage = 1;
    const totalviews = 100;

    function createSerieCard(serie) {
        const card = document.createElement('div');
        card.className = 'serie';
        card.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}">
            <div class="serie-content">
                <h2>${serie.name}</h2>
                <p>Avaliação: ${formatRating(serie.vote_average)}/10</p>
                <p>Ano: ${serie.first_air_date.split('-')[0]}</p>
            </div>
        `;

        seriesContainer.appendChild(card);

        card.addEventListener('click', () => {
            document.querySelectorAll('.serie').forEach(m => m.classList.remove('selected'));
            card.classList.add('selected');
        });
    }

    function formatRating(rating) {
        return rating.toFixed(1);
    }

    async function fetchSeries(page) {
        try {
            const response = await fetch(`${baseUrl}?api_key=${apiKey}&language=pt-BR&page=${page}`);
            const data = await response.json();
            console.log(data);

            if (data.results && data.results.length > 0) {
                data.results.forEach(createSerieCard);
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
                fetchSeries(currentPage);
            }
        }
    }

    fetchSeries(currentPage);
    window.addEventListener('scroll', handleScroll);
});
