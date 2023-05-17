import { IMovieImage } from '../types/movie';

const MoviesImages = ({ images }: { images: IMovieImage }) => {
  return (
    <div>
      <div>{JSON.stringify(images)}</div>
    </div>
  );
};

export default MoviesImages;
