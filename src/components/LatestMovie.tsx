import { useQuery } from '@tanstack/react-query';
import { getLatestMovie } from '../api/movies';
import { Title } from '../styles/gobalStyles';
import Movie from './Movie';
import { IMovie } from '../types/movie';

interface MovieII {
  id: number;
  backdrops: [];
  posters: [];
}

const LatestMovie = () => {
  const { data: movie } = useQuery<void, unknown, IMovie>({
    queryKey: ['latest-movie'],
    queryFn: () => getLatestMovie(),
  });

  return (
    <div>
      <Title>Latest Movie</Title>
    </div>
  );
};

export default LatestMovie;
