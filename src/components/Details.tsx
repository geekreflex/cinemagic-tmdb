import { styled } from 'styled-components';
import { IMovie } from '../types/movie';
import MovieVideos from './MovieVidoes';
import MoviesImages from './MoviesImages';
import { getMovieImages } from '../api/movies';
import { useQuery } from '@tanstack/react-query';
import { IMovieImage } from '../types/movie';
import { IMDB1 } from '../utils/image';
import { IoCalendar, IoTimeOutline } from 'react-icons/io5';
import { formatDate, formatTime } from '../utils/time';
import { truncate } from '../utils/truncate';

interface DetailsProps {
  movie: IMovie;
}

const Details = ({ movie }: DetailsProps) => {
  const { data: images } = useQuery<void, unknown, IMovieImage>({
    queryKey: ['movie-images', movie.id],
    queryFn: () => getMovieImages(movie.id),
  });

  return (
    <Wrap>
      <Main>
        {images && images.logos[0]?.file_path && (
          <Logo>
            <img
              src={`https://image.tmdb.org/t/p/original${images.logos[0].file_path}`}
            />
          </Logo>
        )}
        <Content>
          <MovieTitle>{movie.title}</MovieTitle>
          <div className="sub-group">
            <div className="rating deets">
              <img src={IMDB1} />
              {movie.vote_average.toFixed(1)}
            </div>
            <div className="runtime deets">
              <span>
                <IoTimeOutline />
              </span>
              {formatTime(movie.runtime)}
            </div>
            <div className="release deets">
              <span>
                <IoCalendar />
              </span>
              {formatDate(movie.release_date)}
            </div>
          </div>
          <p className="overview">{truncate(movie.overview)}</p>
        </Content>
        {images && (
          <MoviesImages images={images} backdrop={movie.backdrop_path} />
        )}
      </Main>
      <MovieVideos videos={movie.videos} image={movie.backdrop_path} />
    </Wrap>
  );
};

export default Details;

const Wrap = styled.div`
  margin-bottom: 100px;
`;

const Main = styled.div`
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  top: 400px;
  left: 0;
  z-index: 99;
  left: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .sub-group {
    display: flex;
    align-items: center;
    gap: 20px;

    .deets {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
      font-size: 14px;
    }
  }

  .overview {
    width: 650px;
    line-height: 1.7;
    font-size: 16px;
    margin-bottom: 30px;
    font-weight: 600;
  }

  .rating {
    img {
      width: 40px;
    }
  }

  .runtime {
    span {
      display: flex;
    }
  }
`;

const MovieTitle = styled.div`
  font-size: 40px;
  font-weight: 900;
`;

const Logo = styled.div`
  top: 100px;
  left: 200px;
  right: 0;
  position: absolute;
  z-index: 2;

  img {
    width: 600px;
  }
`;
