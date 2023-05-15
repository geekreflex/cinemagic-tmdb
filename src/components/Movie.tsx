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
        <Content>
          <p>{movie.overview}</p>
          <p>{movie.vote_average}</p>
        </Content>
        <Image path={movie.poster_path} className="" />
      </div>
      <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
    </Card>
  );
};

export default Movie;

const Card = styled.div`
  .img-wrap {
    position: relative;
    width: 100%;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 10px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
`;
