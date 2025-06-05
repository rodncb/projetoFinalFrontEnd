import React, { useState } from "react";
import Button from "../Button/Button";
import { ERROR_MESSAGES } from "../../utils/constants";
import "./SearchForm.css";

const SearchForm = ({ onSubmit, isLoading = false }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      setError(ERROR_MESSAGES.REQUIRED_FIELD);
      return;
    }

    setError("");
    onSubmit(searchTerm.trim());
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (error) {
      setError("");
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__field">
        <label htmlFor="search-input" className="search-form__label">
          Buscar filmes
        </label>
        <input
          id="search-input"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Digite o nome do filme..."
          className={`search-form__input ${
            error ? "search-form__input_error" : ""
          }`}
          disabled={isLoading}
          required
        />
        {error && (
          <span className="search-form__error" role="alert">
            {error}
          </span>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={isLoading || !searchTerm.trim()}
        className="search-form__submit"
      >
        {isLoading ? "Buscando..." : "Buscar"}
      </Button>
    </form>
  );
};

export default SearchForm;
