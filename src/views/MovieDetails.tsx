import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMovie } from '../api/movies';
import { IMovie } from '../types/movie';
import SimilarMovies from '../components/SimilarMovies';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { data, isLoading, isError } = useQuery<void, unknown, IMovie>({
    queryKey: ['movie', movieId],
    queryFn: () => getMovie(movieId),
  });
  return (
    <>
      {isLoading && 'Loading...'}
      {isError && 'Error'}
      {JSON.stringify(data)}
      <SimilarMovies id={movieId!} />
    </>
  );
};

export default MovieDetails;
