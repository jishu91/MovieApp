const API_KEY = "d44d1f56";
const BASE_URL = "https://www.omdbapi.com";


export const getPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/?apikey=${API_KEY}&s=movie`
  );
  const data = await response.json();
  return data.Search || [];
};

export const searchMovies = async (query) => {
  if (!query) return [];

  const response = await fetch(
    `${BASE_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.Search || [];
};
