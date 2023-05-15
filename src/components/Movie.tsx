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
      <div className="poster">
        <Image path={movie.poster_path} />
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  .poster {
    img {
      width: 100%;
    }
  }
`;

export default Movie;
