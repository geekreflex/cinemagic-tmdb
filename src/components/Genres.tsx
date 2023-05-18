import { useQuery } from '@tanstack/react-query';
import { getMovieGenres } from '../api/movies';
import { styled } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { IGenre } from '../types/movie';
import { createRef, useEffect, useRef, useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Genres = () => {
  const { data } = useQuery<void, unknown, IGenre>({
    queryKey: ['movie-genres'],
    queryFn: () => getMovieGenres(),
  });
  return <>{data && <Categories data={data} />}</>;
};

const Categories = ({ data }: { data: IGenre }) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const refs = useRef<any>(data.genres.map(() => createRef()));
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

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

  const onSelect = (genre: string, index: number) => {
    refs.current[index].current.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });

    navigate(`/search?q=${genre.toLowerCase()}`);
  };

  return (
    <Wrap>
      <div className={`arrow-box ${showLeftArrow && 'arrow-box-left'}`}>
        {showLeftArrow && (
          <button className="arrow arrow-left" onClick={onScrollLeft}>
            <IoChevronBack />
          </button>
        )}
      </div>
      <Main ref={containerRef}>
        <div className="items">
          <AnimatePresence>
            {data &&
              data.genres.map((genre, index) => (
                <motion.div
                  ref={refs.current[index]}
                  onClick={() => onSelect(genre.name, index)}
                  className="item"
                  key={genre.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {genre.name}
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </Main>
      <div className={`arrow-box ${showRightArrow && 'arrow-box-right'}`}>
        {showRightArrow && (
          <button className="arrow arrow-right" onClick={onScrollRight}>
            <IoChevronForward />
          </button>
        )}
      </div>
    </Wrap>
  );
};

export default Genres;

const Wrap = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .arrow-box {
    width: 40px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 9;
  }

  .arrow-box-left::before,
  .arrow-box-right:before {
    content: '';
    width: 30px;
    height: 100%;
    position: absolute;
    pointer-events: none;
  }

  .arrow-box-right::before {
    left: 0;
    box-shadow: -15px 0px 10px -6px rgba(0, 0, 0, 0.4);
  }

  .arrow-box-left::before {
    right: 0;
    box-shadow: 15px 0px 10px -6px rgba(0, 0, 0, 0.4);
  }

  .arrow {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    background-color: transparent;
    color: #ccc;
    font-size: 20px;
  }
`;
const Main = styled.div`
  width: 900px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background-color: transparent;
  }

  .items {
    display: flex;
    gap: 15px;
    width: max-content;
    flex-wrap: nowrap;
    position: relative;
    overflow-x: hidden;
    scroll-behavior: smooth;

    .item {
      padding: 8px 18px;
      border-radius: 20px;
      cursor: pointer;
      font-weight: 600;
      background-color: #222;
      font-size: 15px;
      display: flex;
      white-space: nowrap;
      &:hover {
        background-color: #111;
      }
    }
  }
`;
