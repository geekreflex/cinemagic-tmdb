import { styled } from 'styled-components';
import { IMovie } from '../types/movie';
import Image from './Image';

interface MovieProps {
  movie: IMovie;
}

const Movie = ({ movie }: MovieProps) => {
  return (
    <Card>
      <Image path={movie.poster_path} className="" />
      <Details>
        <h3>{movie.title}</h3>
      </Details>
    </Card>
  );
};

export default Movie;

const Card = styled.div``;

const Details = styled.div``;
