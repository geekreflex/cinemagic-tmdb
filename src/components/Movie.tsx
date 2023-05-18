import { styled } from 'styled-components';
import { IMovie } from '../types/movie';
import Image from './Image';
import { Link } from 'react-router-dom';
import { truncate } from '../utils/truncate';
import { useState } from 'react';
import AnimMovie from './anim/AnimMovie';

interface MovieProps {
  movie: IMovie;
  click?: () => void;
}

const Movie = ({ movie, click }: MovieProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <AnimMovie>
      <Card title={movie.title}>
        <Link onClick={click} to={`/movie/${movie.id}`}>
          <div
            className="img-wrap"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            <Content visible={visible.toString()}>
              <p>{truncate(movie.overview, 60)}</p>
            </Content>
            <Image path={movie.poster_path} className="" />
          </div>
        </Link>
        <Link onClick={click} className="title" to={`/movie/${movie.id}`}>
          {movie.title}
        </Link>
      </Card>
    </AnimMovie>
  );
};

export default Movie;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .title {
    padding: 0 10px;
    font-weight: 600;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #fff;
    &:hover {
      color: #ccc;
    }
  }

  .img-wrap {
    position: relative;
    width: 100%;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 10px;
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
  visible: string;
}

const Content = styled.div<ContentProps>`
  visibility: ${(props) => (props.visible === 'true' ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible === 'true' ? 1 : 0)};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  display: flex;
  align-items: flex-end;
  transition: all 300ms;
  z-index: 9;

  p {
    font-weight: 600;
    color: #fff;
    font-size: 14px;
  }
`;
