import { useQuery } from '@tanstack/react-query';
import { MovieData } from '../types/movie';
import { getMovies } from '../api/movies';
import Movie from './Movie';
import { styled } from 'styled-components';
import { useRef } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

interface MovieTuffProps {
  title: string;
  name: string;
}

const MovieTuff = ({ title, name }: MovieTuffProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data: movies } = useQuery<void, unknown, MovieData>({
    queryKey: [name],
    queryFn: () => getMovies(name),
  });

  const onScrollRight = () => {
    containerRef.current?.scrollBy({
      left: containerRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const onScrollLeft = () => {
    containerRef.current?.scrollBy({
      left: -containerRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  return (
    <Wrap>
      <TopSect>
        <h1>{title}</h1>
        <Link to={`/${name}`}>View more</Link>
      </TopSect>
      <Arrow>
        <button onClick={onScrollLeft} className="left-arrow">
          <IoChevronBack />
        </button>
        <button onClick={onScrollRight} className="right-arrow">
          <IoChevronForward />
        </button>
      </Arrow>
      <Main ref={containerRef}>
        {movies &&
          movies?.results
            ?.slice(0, 9)
            .map((movie) => <Movie movie={movie} key={movie.id} />)}
      </Main>
    </Wrap>
  );
};

export default MovieTuff;

const Wrap = styled.div`
  position: relative;
`;
const Main = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background-color: transparent;
  }
`;
const TopSect = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
  }
`;
const Arrow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 998;
  justify-content: space-between;
  top: 50%;

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    font-size: 22px;
    cursor: pointer;
    background-color: transparent;
  }

  .left-arrow {
    margin-left: -50px;
  }
  .right-arrow {
    margin-right: -50px;
  }
`;
