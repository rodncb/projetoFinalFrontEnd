// Mock data para demonstração quando a API não estiver disponível
export const MOCK_MOVIES = {
  Search: [
    {
      Title: "Batman Begins",
      Year: "2005",
      imdbID: "tt0372784",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "The Dark Knight",
      Year: "2008",
      imdbID: "tt0468569",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    },
    {
      Title: "The Dark Knight Rises",
      Year: "2012",
      imdbID: "tt1345836",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
    },
    {
      Title: "Batman",
      Year: "1989",
      imdbID: "tt0096895",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
    },
    {
      Title: "Batman Returns",
      Year: "1992",
      imdbID: "tt0103776",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
    },
    {
      Title: "Batman Forever",
      Year: "1995",
      imdbID: "tt0112462",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
  ],
  totalResults: "396",
  Response: "True",
};

export const MOCK_SEARCH_TERMS = {
  batman: MOCK_MOVIES,
  superman: {
    Search: [
      {
        Title: "Superman",
        Year: "1978",
        imdbID: "tt0078346",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzE3MTQ3XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
      },
      {
        Title: "Superman II",
        Year: "1980",
        imdbID: "tt0081573",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BODk2NjgzNTEtYzZhZC00ZTBkLTllMDYtMmM5MTAyNzA2MjE4XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
      },
      {
        Title: "Man of Steel",
        Year: "2013",
        imdbID: "tt0770828",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg",
      },
    ],
    totalResults: "267",
    Response: "True",
  },
  marvel: {
    Search: [
      {
        Title: "Iron Man",
        Year: "2008",
        imdbID: "tt0371746",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
      },
      {
        Title: "The Avengers",
        Year: "2012",
        imdbID: "tt0848228",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      },
      {
        Title: "Spider-Man",
        Year: "2002",
        imdbID: "tt0145487",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg2MjU@._V1_SX300.jpg",
      },
    ],
    totalResults: "198",
    Response: "True",
  },
};
