import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMovie } from '../api/movies';
import { IMovie } from '../types/movie';
import SimilarMovies from '../components/SimilarMovies';
import Details from '../components/Details';

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
      {data && <Details movie={data} />}
      {movieId && <SimilarMovies id={movieId} />}
    </>
  );
};

export default MovieDetails;
