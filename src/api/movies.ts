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

export const getPopularMovies = async (_key: string, nextPage = 1) => {
  const { data } = await axios.get(
    `${apiUrl}/movie/popular?api_key=${apiKey}`,
    {
      params: { page: nextPage },
      ...config,
    }
  );
  return data;
};
