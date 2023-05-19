import { styled } from 'styled-components';
import { IMovieImage } from '../types/movie';
import { createRef, useEffect, useRef, useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { Placeholder } from '../utils/image';

const MoviesImages = ({
  images,
  backdrop,
}: {
  images: IMovieImage;
  backdrop: string;
}) => {
  const url = `https://image.tmdb.org/t/p/w300`;
  const originalUrl = `https://image.tmdb.org/t/p/original`;
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState('');
  const refs = useRef<any>(images.backdrops.map(() => createRef()));
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (images && images.backdrops.length > 0) {
      const url = `${originalUrl}${images.backdrops[0].file_path || backdrop}`;
      setCurrentImg(url);
    } else {
      setCurrentImg(Placeholder);
    }
  }, [images]);

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
  }, [images]);

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

  const onSelect = (path: string, index: number) => {
    refs.current[index].current.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
    setCurrentImg(`${originalUrl}${path}`);
  };

  const onImgLoad = () => {
    setIsAnimating(true);
  };

  const onAdnimtionComplete = () => {
    setIsAnimating(false);
  };

  return (
    <Wrap>
      <Jumbotron>
        <motion.img
          key={currentImg}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onLoad={onImgLoad}
          style={{ opacity: isAnimating ? 0 : 1 }}
          onAnimationComplete={onAdnimtionComplete}
          src={currentImg}
        />
        <div className="gradient-left"></div>
        <div className="gradient-bottom"></div>
      </Jumbotron>
      <ImageSlider>
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
        <ImageListWrap ref={containerRef}>
          <div className="image-list">
            {images?.backdrops?.map((image, index) => (
              <motion.img
                ref={refs.current[index]}
                className="image"
                onClick={() => onSelect(image.file_path, index)}
                key={image.file_path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                src={url + image.file_path}
              />
            ))}
          </div>
        </ImageListWrap>
      </ImageSlider>
    </Wrap>
  );
};

export default MoviesImages;

const Wrap = styled.div`
  min-height: 100vh;
  width: 100%;
  margin-bottom: 100px;
  top: 0;
  position: absolute;
  overflow: hidden;
  z-index: 999;

  @media (max-width: 900px) {
    position: static;
    margin-bottom: 20px;
    min-height: auto;
  }
`;

const Jumbotron = styled.div`
  width: 100%;
  display: flex;
  top: 0;
  left: 0;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .gradient-left {
    position: absolute;
    height: 100%;
    width: 60vw;
    left: 0;
    background: linear-gradient(
      to right,
      #181818,
      #181818,
      #18181890,
      transparent
    );
  }
  .gradient-bottom {
    position: absolute;
    height: 50vh;
    width: 100%;
    bottom: 0;
    background: linear-gradient(
      to top,
      #181818,
      #181818,
      #18181890,
      transparent
    );
  }

  @media (max-width: 900px) {
    position: relative;

    img {
      object-position: center;
    }

    .gradient-left {
      display: none;
    }

    .gradient-bottom {
      bottom: 0;
      height: 100px;
    }
  }
`;

const ImageSlider = styled.div`
  position: absolute;
  width: 600px;
  right: 100px;
  bottom: 200px;
  z-index: 9999;

  @media (max-width: 900px) {
    position: relative;
    display: none;
  }
`;

const ImageListWrap = styled.div`
  overflow-x: auto;
  right: 100px;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background-color: transparent;
  }

  .image-list {
    width: max-content;
    overflow-x: hidden;
    display: flex;
    gap: 20px;
    padding: 20px 0;

    .image {
      width: 150px;
      display: flex;
      box-shadow: rgba(0, 0, 0, 0.8) 0px 25px 20px -20px;
      border: 2px solid transparent;
      cursor: pointer;
      border-radius: 5px;
      overflow: hidden;

      &:hover {
        border: 2px solid #242424;
      }
      img {
        width: 100%;
      }
    }
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
    color: #fff;
    /* color: #e02e17; */
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

  @media (max-width: 768px) {
    display: none;
  }
`;
