import Categories from './Categories';
import { useQuery } from '@tanstack/react-query';
import { getMovieGenres } from '../api/movies';
import { IGenre } from '../types/movie';

const Genres = () => {
  const { data } = useQuery<void, unknown, IGenre>({
    queryKey: ['movie-genres'],
    queryFn: () => getMovieGenres(),
  });
  return <>{data && <Categories data={data} />}</>;
};

export default Genres;
