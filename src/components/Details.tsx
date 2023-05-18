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
import { Container } from '../styles/gobalStyles';
import MovieGenres from './MovieGenres';

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
        <Container>
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
            <MovieGenres genres={movie.genres} />
          </Content>
        </Container>
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
  top: 280px;
  z-index: 99;
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
    width: 500px;
    line-height: 1.7;
    font-size: 16px;
    margin-bottom: 10px;
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
  font-size: 60px;
  font-weight: 900;
  width: 600px;
  line-height: 1;
  margin-bottom: 20px;
`;
