import axios from 'axios';

const apiKey = import.meta.env.VITE_TMDB_API;

const token = import.meta.env.VITE_TMDB_API_TOKEN;
const apiUrl = import.meta.env.VITE_TMDB_URL_V3;

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const getMovies = async (key: string, nextPage = 1) => {
  const { data } = await axios.get(`${apiUrl}/movie/${key}?api_key=${apiKey}`, {
    params: { page: nextPage },
    ...config,
  });
  return data;
};

export const getMovie = async (id: string | undefined) => {
  const { data } = await axios.get(`${apiUrl}/movie/${id}`, {
    ...config,
    params: { append_to_response: 'videos', language: 'en-US' },
  });
  return data;
};

export const getSimilarMovies = async (id: string | undefined) => {
  const { data } = await axios.get(`${apiUrl}/movie/${id}/similar`, {
    ...config,
  });
  return data;
};

export const getSearch = async (query: string, nextPage = 1) => {
  const { data } = await axios.get(`${apiUrl}/search/movie`, {
    ...config,
    params: { query, page: nextPage },
  });
  return data;
};

export const getLatestMovie = async () => {
  const { data } = await axios.get(`${apiUrl}/movie/latest`, {
    ...config,
  });
  return data;
};

export const getMoviesDetailsBatch = async (
  movieIds: number[]
): Promise<any[]> => {
  const response = await Promise.all(
    movieIds.map((movieId) => axios.get(`${apiUrl}/movie/${movieId}`, config))
  );
  const movieDetails = response.map((response) => response.data);
  return movieDetails;
};
