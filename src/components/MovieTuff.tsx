import { useQuery } from '@tanstack/react-query';
import { MovieData } from '../types/movie';
import { getMovies } from '../api/movies';
import Movie from './Movie';
import { styled } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { hyphen } from '../utils/hyphen';

interface MovieTuffProps {
  title: string;
  name: string;
}

const MovieTuff = ({ title, name }: MovieTuffProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);
  const { data: movies } = useQuery<void, unknown, MovieData>({
    queryKey: [name],
    queryFn: () => getMovies(name),
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    if (container.scrollWidth > container.clientWidth) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    } else {
      setShowLeftArrow(false);
      setShowRightArrow(false);
    }

    const handleScroll = () => {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        <Link to={`/${hyphen(name)}`}>View more</Link>
      </TopSect>
      <Arrow>
        {showLeftArrow && (
          <button onClick={onScrollLeft} className="left-arrow">
            <IoChevronBack />
          </button>
        )}
        {showRightArrow && (
          <button onClick={onScrollRight} className="right-arrow">
            <IoChevronForward />
          </button>
        )}
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
    position: absolute;
  }

  .left-arrow {
    margin-left: -40px;
    left: 0;
  }
  .right-arrow {
    margin-right: -40px;
    right: 0;
  }
`;
