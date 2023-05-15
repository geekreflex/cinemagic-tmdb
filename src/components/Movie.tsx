import { styled } from 'styled-components';
import { IMovie } from '../types/movie';
import Image from './Image';
import { Link } from 'react-router-dom';

interface MovieProps {
  movie: IMovie;
}

const Movie = ({ movie }: MovieProps) => {
  return (
    <Card>
      <div className="img-wrap">
        <Image path={movie.poster_path} className="" />
      </div>
      <Details>
        <Link to={`/movie/${movie.id}`}>
          <p>{movie.title}</p>
        </Link>
      </Details>
    </Card>
  );
};

export default Movie;

const Card = styled.div`
  .img-wrap {
    width: 100%;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

const Details = styled.div`
  padding: 0 10px;
  a {
    text-decoration: none;
    color: inherit;
  }
  p {
    font-weight: 400;
  }
`;
