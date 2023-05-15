import { IMovie } from '../types/movie';
import Image from './Image';

interface MovieProps {
  movie: IMovie;
}

const Movie = ({ movie }: MovieProps) => {
  return (
    <div>
      {/* <h4>{movie.title}</h4> */}
      <Image path={movie.poster_path} className="" />
    </div>
  );
};

export default Movie;
