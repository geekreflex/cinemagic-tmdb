import { useQuery } from '@tanstack/react-query';
import { MovieData } from '../types/movie';
import { getSimilarMovies } from '../api/movies';
import { styled } from 'styled-components';
import Movie from './Movie';

const SimilarMovies = ({ id }: { id: string }) => {
  const { data: movies } = useQuery<void, unknown, MovieData>({
    queryKey: ['similar-movies', id],
    queryFn: () => getSimilarMovies(id),
  });
  return (
    <Wrap>
      <h2>Similar Movies</h2>
      <Main>
        {movies &&
          movies.results.map((movie) => {
            if (movie.poster_path) {
              return <Movie movie={movie} />;
            }
          })}
      </Main>
    </Wrap>
  );
};

export default SimilarMovies;

const Wrap = styled.div`
  margin-bottom: 80px;
`;
const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
`;
