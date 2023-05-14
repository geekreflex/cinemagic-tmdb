import { getMovies } from '../api/movies';
import { MovieData } from '../types/movie';
import Movie from './Movie';
import { styled } from 'styled-components';
import { useQuery } from '@tanstack/react-query';

const MovieList = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery<void, unknown, MovieData>({
    queryKey: ['popular-movies'],
    queryFn: () => getMovies(),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <Wrap>
      {movies &&
        movies.results.map((movie) => <Movie movie={movie} key={movie.id} />)}
    </Wrap>
  );
};

export default MovieList;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
