import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMovie } from '../api/movies';
import Image from '../components/Image';
import { IMovie } from '../types/movie';
import { styled } from 'styled-components';
import SimilarMovies from '../components/SimilarMovies';
import Genres from '../components/Genres';
import { IoStar } from 'react-icons/io5';
import { truncate } from '../utils/truncate';
import { InfoLoading } from '../components/Skeleton';
import { Title } from '../styles/gobalStyles';
import { formatTime } from '../utils/time';
import FavToggle from '../components/FavToggle';

const MovieInfo = () => {
  const { movieId } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery<void, unknown, IMovie>({
    queryKey: ['movie', movieId],
    queryFn: () => getMovie(movieId),
  });
  return (
    <>
      {isLoading && <InfoLoading />}
      {isError && 'Error'}
      {movie && (
        <Main>
          <div className="title-wrap">
            <Title>{movie.title}</Title>
          </div>
          <InfoWrap>
            <div className="content">
              <FavToggle id={movie.id} />
              <div className="details">
                <div>
                  <h3>Overview</h3>
                  <p>{truncate(movie.overview, 500)}</p>
                </div>
                <div className="subgroup">
                  <div>
                    <h3>Release date</h3>
                    <p>{movie.release_date}</p>
                  </div>
                  <div>
                    <h3>Runtime</h3>
                    <p>{formatTime(movie.runtime || 0)}</p>
                  </div>
                  <div>
                    <h3>Rating</h3>
                    <Star>
                      <span>
                        <IoStar />
                      </span>
                      <p>{movie.vote_average.toFixed(1)}</p>
                    </Star>
                  </div>
                </div>
                <Genres genres={movie.genres} />
              </div>
            </div>
            <div className="backdrop">
              <div className="gradient"></div>
              <Image path={movie.backdrop_path} size={500} />
            </div>
          </InfoWrap>
        </Main>
      )}
      <SimilarMovies id={movieId!} />
    </>
  );
};

export default MovieInfo;

const Main = styled.div`
  .title-wrap {
    margin-bottom: 20px;
  }
`;

const InfoWrap = styled.div`
  margin-bottom: 100px;
  height: 500px;
  background-color: #010101;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 35px 20px -20px;

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-right: 100px;
  }

  .poster {
    position: absolute;
    right: 0;
    top: 50px;

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 50%;
      box-shadow: 0 4px 9px rgba(0, 0, 0);
    }
  }

  .backdrop {
    width: 40%;
    display: flex;
    position: relative;
    border-radius: 20px;
    .gradient {
      background: linear-gradient(to right, #010101, #010101, transparent);
      width: 150px;
      height: 100%;
      position: absolute;
      margin-left: -30px;
    }
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 20px;
    h3 {
      font-size: 14px;
      color: #ccc;
      font-weight: 600;
      margin-bottom: 10px;
    }

    p {
      line-height: 1.5;
      font-size: 14px;
    }
  }

  .subgroup {
    display: flex;
    gap: 50px;
  }

  @media (max-width: 768px) {
    padding: 0;
    flex-direction: column;
    height: auto;
    .backdrop {
      order: 1;
      width: 100%;
      height: 250px;
      .gradient {
        width: 100%;
        height: 60px;
        margin: 0;
        margin-bottom: -10px;
        bottom: 0;
        background: linear-gradient(to top, #010101, #010101, transparent);
      }
    }
    .content {
      order: 2;
      padding: 20px;
      width: 100%;
      margin: 0;
      position: relative;
    }
  }
`;

const Star = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  span {
    color: yellow;
    font-size: 20px;
    display: flex;
    margin-bottom: 4px;
  }
`;
