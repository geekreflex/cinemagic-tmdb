import { styled } from 'styled-components';
import { IMovieImage } from '../types/movie';

const MoviesImages = ({
  images,
  backdrop,
}: {
  images: IMovieImage;
  backdrop: string;
}) => {
  return (
    <Wrap>
      <Jumbotron>
        <img
          src={`https://image.tmdb.org/t/p/original${
            images.backdrops[0]?.file_path || backdrop
          }`}
        />
        <div className="gradient-left"></div>
        <div className="gradient-bottom"></div>
      </Jumbotron>
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
`;

const Jumbotron = styled.div`
  width: 100%;
  display: flex;
  top: 0;
  left: 0;

  img {
    width: 100%;
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
`;
