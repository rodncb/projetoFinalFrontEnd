import { BASE_URL, API_KEY, IMAGE_BASE_URL, ERROR_MESSAGES } from "../utils/constants";

class ApiService {
  constructor() {
    this.baseUrl = BASE_URL;
    this.apiKey = API_KEY;
    this.imageBaseUrl = IMAGE_BASE_URL;
  }

  async searchMovies(searchTerm, page = 1) {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${encodeURIComponent(searchTerm)}&page=${page}&language=pt-BR`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Chave da API inválida. Verifique sua API key da TMDB.");
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Transformar dados TMDB para formato compatível com o componente
      const transformedData = {
        Search: data.results.map(movie => ({
          imdbID: movie.id.toString(),
          Title: movie.title,
          Year: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
          Type: 'movie',
          Poster: movie.poster_path ? `${this.imageBaseUrl}${movie.poster_path}` : 'N/A'
        })),
        totalResults: data.total_results.toString(),
        Response: 'True'
      };

      return transformedData;
    } catch (error) {
      if (error.name === "TypeError" && error.message.includes("fetch")) {
        throw new Error(ERROR_MESSAGES.NETWORK_ERROR);
      }
      throw error;
    }
  }

  async getMovieDetails(movieId) {
    const url = `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}&language=pt-BR`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Chave da API inválida. Verifique sua API key da TMDB.");
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const movie = await response.json();

      // Transformar dados TMDB para formato compatível
      const transformedMovie = {
        imdbID: movie.id.toString(),
        Title: movie.title,
        Year: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
        Rated: 'N/A',
        Released: movie.release_date || 'N/A',
        Runtime: movie.runtime ? `${movie.runtime} min` : 'N/A',
        Genre: movie.genres.map(g => g.name).join(', '),
        Director: 'N/A', // TMDB requer chamada adicional para credits
        Writer: 'N/A',
        Actors: 'N/A',
        Plot: movie.overview || 'Sinopse não disponível',
        Language: movie.original_language || 'N/A',
        Country: movie.production_countries.map(c => c.name).join(', '),
        Awards: 'N/A',
        Poster: movie.poster_path ? `${this.imageBaseUrl}${movie.poster_path}` : 'N/A',
        Ratings: [
          {
            Source: "TMDB",
            Value: `${movie.vote_average}/10`
          }
        ],
        Metascore: 'N/A',
        imdbRating: movie.vote_average ? movie.vote_average.toString() : 'N/A',
        imdbVotes: movie.vote_count ? movie.vote_count.toString() : 'N/A',
        Type: 'movie',
        DVD: 'N/A',
        BoxOffice: 'N/A',
        Production: movie.production_companies.map(c => c.name).join(', '),
        Website: movie.homepage || 'N/A',
        Response: 'True'
      };

      return transformedMovie;
    } catch (error) {
      if (error.name === "TypeError" && error.message.includes("fetch")) {
        throw new Error(ERROR_MESSAGES.NETWORK_ERROR);
      }
      throw error;
    }
  }
}

const apiService = new ApiService();
export default apiService;
