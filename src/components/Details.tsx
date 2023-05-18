import { styled } from 'styled-components';
import { IMovie } from '../types/movie';
import MovieVideos from './MovieVidoes';
import MoviesImages from './MoviesImages';
import { getMovieImages } from '../api/movies';
import { useQuery } from '@tanstack/react-query';
import { IMovieImage } from '../types/movie';

interface DetailsProps {
  movie: IMovie;
}

const Details = ({ movie }: DetailsProps) => {
  const { data: images } = useQuery<void, unknown, IMovieImage>({
    queryKey: ['movie-images', movie.id],
    queryFn: () => getMovieImages(movie.id),
  });

  return (
    <Wrap>
      <Main>{images && <MoviesImages images={images} />}</Main>
      <MovieVideos videos={movie.videos} image={movie.backdrop_path} />
    </Wrap>
  );
};

export default Details;

const Wrap = styled.div`
  margin-bottom: 100px;
`;

const Main = styled.div``;
