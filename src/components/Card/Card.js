import React from "react";
import "./Card.css";

const Card = ({ movie, onClick }) => {
  const handleImageError = (e) => {
    e.target.src =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ0NSIgdmlld0JveD0iMCAwIDMwMCA0NDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDQ1IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjUgMTg1SDEyNy41VjE5MC41SDE3MlYxOTNIMTc0LjVWMjA1SDE3MlYyMDcuNUgxMjcuNVYyMDVIMTI1VjE4NVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTEzMCAxODcuNUgxNjkuNVYyMDIuNUgxMzBWMTg3LjVaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMjQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUNBM0FGIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiPkltYWdlbSBuP28gZW5jb250cmFkYTwvdGV4dD4KPC9zdmc+";
  };

  return (
    <article className="card" onClick={() => onClick && onClick(movie)}>
      <div className="card__image-container">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : ""}
          alt={`Poster do filme ${movie.Title}`}
          className="card__image"
          onError={handleImageError}
          loading="lazy"
        />
      </div>
      <div className="card__content">
        <h3 className="card__title">{movie.Title}</h3>
        <p className="card__year">{movie.Year}</p>
        <p className="card__type">
          {movie.Type === "movie"
            ? "Filme"
            : movie.Type === "series"
            ? "Série"
            : "Episódio"}
        </p>
      </div>
    </article>
  );
};

export default Card;
