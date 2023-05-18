import { styled } from 'styled-components';
import { IMovieImage } from '../types/movie';

const MoviesImages = ({ images }: { images: IMovieImage }) => {
  return (
    <div>
      <Jumbotron>
        <img
          src={`https://image.tmdb.org/t/p/original${images.backdrops[0].file_path}`}
        />
        <div className="gradient-left"></div>
        <div className="gradient-bottom"></div>
      </Jumbotron>
    </div>
  );
};

export default MoviesImages;

const Jumbotron = styled.div`
  width: 100%;
  position: relative;
  display: flex;

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
      /* #18181850, */ #18181820,
      transparent
    );
  }
  .gradient-bottom {
    position: absolute;
    height: 350px;
    width: 100%;
    bottom: 0;
    /* border: 1px solid red; */
    background: linear-gradient(
      to top,
      #181818,
      #181818,
      #18181890,
      transparent
    );
  }
`;
