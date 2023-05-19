import { styled } from 'styled-components';
import { IMovieVideo } from '../types/movie';
import { Container, Title } from '../styles/gobalStyles';
import { IoHeart, IoHeartOutline, IoPlayCircle } from 'react-icons/io5';

const MovieVideos = ({ videos }: { videos: IMovieVideo }) => {
  const filteredVideos = videos.results.filter(
    (video) => video.type === 'Trailer' || video.type === 'Teaser'
  );

  const sortedVideos = [...filteredVideos].sort((a, b) => {
    if (a.official === b.official) {
      if (a.type === b.type) {
        return 0;
      } else if (a.type === 'Trailer') {
        return -1;
      } else {
        return 1;
      }
    } else if (a.official) {
      return -1;
    } else {
      return 1;
    }
  });

  return (
    <Wrap>
      <Main>
        <button className="watch-now btn">
          Watch Now
          <span>
            <IoPlayCircle />
          </span>
        </button>
        <button className="fav btn">
          Favorite
          <span>
            <IoHeartOutline />
          </span>
        </button>
      </Main>
    </Wrap>
  );
};

export default MovieVideos;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  z-index: 9999;
  background-color: #111;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    width: 200px;
    border: none;
    outline: none;
    padding: 13px 20px;
    border-radius: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    border: 1px solid rgb(153, 22, 5);
    span {
      font-size: 24px;
      display: flex;
    }
  }

  .watch-now {
  }

  .fav {
    background-color: transparent;
    border: 1px solid #fff;
  }

  @media (max-width: 768px) {
    button {
      span {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 370px) {
    flex-direction: column;
    gap: 10px;

    button {
      width: 100%;
    }
  }
`;
