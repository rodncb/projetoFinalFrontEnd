import React, { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Preloader from "../../components/Preloader/Preloader";
import ApiService from "../../services/api";
import { ITEMS_PER_PAGE, ERROR_MESSAGES } from "../../utils/constants";
import "./Search.css";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);
  const [totalResults, setTotalResults] = useState(0);

  const handleSearch = async (term) => {
    setIsLoading(true);
    setError("");
    setMovies([]);
    setDisplayedCount(ITEMS_PER_PAGE);
    setSearchTerm(term);
    setHasSearched(true);

    try {
      const data = await ApiService.searchMovies(term);

      if (data.Search && data.Search.length > 0) {
        setMovies(data.Search);
        setTotalResults(parseInt(data.totalResults) || data.Search.length);
      } else {
        setMovies([]);
        setTotalResults(0);
      }
    } catch (err) {
      setError(err.message || ERROR_MESSAGES.SEARCH_ERROR);
      setMovies([]);
      setTotalResults(0);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowMore = () => {
    setDisplayedCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const handleCardClick = (movie) => {
    // Funcionalidade futura para modal com detalhes
    console.log("Filme clicado:", movie);
  };

  const displayedMovies = movies.slice(0, displayedCount);
  const hasMoreToShow = displayedCount < movies.length;

  return (
    <main className="search">
      <div className="search__container">
        <section className="search__form-section">
          <h1 className="search__title">Buscar Filmes</h1>
          <SearchForm onSubmit={handleSearch} isLoading={isLoading} />
        </section>

        {isLoading && (
          <section className="search__loading">
            <Preloader isVisible={true} />
          </section>
        )}

        {error && (
          <section className="search__error">
            <div className="error-message">
              <p className="error-message__text">{error}</p>
            </div>
          </section>
        )}

        {hasSearched && !isLoading && !error && (
          <section className="search__results">
            {movies.length > 0 ? (
              <>
                <div className="search__results-header">
                  <h2 className="search__results-title">
                    Resultados para "{searchTerm}"
                  </h2>
                  <p className="search__results-count">
                    Exibindo {displayedMovies.length} de {movies.length}{" "}
                    resultados
                    {totalResults > movies.length &&
                      ` (${totalResults} encontrados no total)`}
                  </p>
                </div>

                <div className="search__results-grid">
                  {displayedMovies.map((movie) => (
                    <Card
                      key={movie.imdbID}
                      movie={movie}
                      onClick={handleCardClick}
                    />
                  ))}
                </div>

                {hasMoreToShow && (
                  <div className="search__show-more">
                    <Button
                      variant="secondary"
                      onClick={handleShowMore}
                      className="search__show-more-button"
                    >
                      Mostrar mais
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="search__no-results">
                <div className="no-results">
                  <div className="no-results__icon">🔍</div>
                  <h2 className="no-results__title">
                    {ERROR_MESSAGES.NO_RESULTS}
                  </h2>
                  <p className="no-results__text">
                    Tente buscar com outras palavras-chave ou verifique a
                    ortografia.
                  </p>
                </div>
              </div>
            )}
          </section>
        )}

        {!hasSearched && (
          <section className="search__empty">
            <div className="search-empty">
              <div className="search-empty__icon">🎬</div>
              <h2 className="search-empty__title">Pronto para começar?</h2>
              <p className="search-empty__text">
                Digite o nome de um filme ou série no campo acima para começar
                sua busca.
              </p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Search;
