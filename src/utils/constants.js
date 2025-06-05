// API Configuration - TMDB (The Movie Database)
export const API_KEY = "ad31f34950f8a7f28b7ec409210d5834";
export const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; // Para posters dos filmes

// Search settings
export const ITEMS_PER_PAGE = 3;

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Erro de conexão. Tente novamente.",
  NO_RESULTS: "Nada encontrado",
  SEARCH_ERROR: "Erro ao buscar filmes. Tente novamente.",
  REQUIRED_FIELD: "Campo obrigatório",
};

// Success messages
export const SUCCESS_MESSAGES = {
  SEARCH_SUCCESS: "Busca realizada com sucesso",
};

// Routes
export const ROUTES = {
  MAIN: "/",
  SEARCH: "/search",
};
