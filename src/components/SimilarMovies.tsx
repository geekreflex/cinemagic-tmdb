import { useQuery } from '@tanstack/react-query';
import { MovieData } from '../types/movie';
import { getSimilarMovies } from '../api/movies';
import { styled } from 'styled-components';
import Movie from './Movie';
import { Container, MovieList, Title } from '../styles/gobalStyles';
import { DynamicGrid } from './Skeleton';

const SimilarMovies = ({ id }: { id: string }) => {
  const { data: movies, isLoading } = useQuery<void, unknown, MovieData>({
    queryKey: ['similar-movies', id],
    queryFn: () => getSimilarMovies(id),
  });
  return (
    <Wrap>
      <Container>
        <Title className="title-mb">More Like This</Title>
        {isLoading ? (
          <DynamicGrid />
        ) : (
          <MovieList>
            {movies &&
              movies.results.map((movie) => {
                return <Movie movie={movie} key={movie.id} />;
              })}
          </MovieList>
        )}
      </Container>
    </Wrap>
  );
};

export default SimilarMovies;

const Wrap = styled.div``;
