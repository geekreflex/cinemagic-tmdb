import { styled } from 'styled-components';
import { IMovie } from '../types/movie';
import Image from './Image';
import { Link } from 'react-router-dom';
import { truncate } from '../utils/truncate';
import { useState } from 'react';

interface MovieProps {
  movie: IMovie;
}

const Movie = ({ movie }: MovieProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <Card>
      <Link to={`/movie/${movie.id}`}>
        <div
          className="img-wrap"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          <Content visible={visible}>
            {/* <p>{movie.vote_average}</p> */}
            <p>{truncate(movie.overview, 100)}</p>
          </Content>
          <Image path={movie.poster_path} className="" />
        </div>
      </Link>
      <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
    </Card>
  );
};

export default Movie;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .img-wrap {
    position: relative;
    width: 100%;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 10px;
    height: 500px;
    background-color: #010101;
    cursor: pointer;
    img {
      transition: all 300ms;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

interface ContentProps {
  visible: boolean;
}

const Content = styled.div<ContentProps>`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  display: flex;
  align-items: flex-end;
  transition: all 300ms;
  z-index: 9;
`;
