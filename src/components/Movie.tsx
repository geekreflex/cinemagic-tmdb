import { styled } from 'styled-components';
import { IMovie } from '../types/movie';
import Image from './Image';

interface MovieProps {
  movie: IMovie;
}

const Movie = ({ movie }: MovieProps) => {
  return (
    <Wrap>
      <h4>{movie.title}</h4>
      <Image path={movie.poster_path} />
    </Wrap>
  );
};

const Wrap = styled.div``;

export default Movie;
