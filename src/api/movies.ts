import axios from 'axios';

const apiKey = import.meta.env.VITE_TMDB_API;

const token = import.meta.env.VITE_TMDB_API_TOKEN;
const apiUrl = import.meta.env.VITE_TMDB_URL_V3;

export const getMovies = async () => {
  const { data } = await axios.get(
    `${apiUrl}/movie/popular?api_key=${apiKey}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(data);
  return data;
};
