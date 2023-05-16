import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { useQuery } from '@tanstack/react-query';
import { getMovie } from '../api/movies';
import Image from '../components/Image';
import { IMovie } from '../types/movie';
import { styled } from 'styled-components';
import SimilarList from '../components/SimilarList';
import Genres from '../components/Genres';

const MovieInfo = () => {
  const { movieId } = useParams();
  const { data: movie } = useQuery<void, unknown, IMovie>({
    queryKey: ['movie', movieId],
    queryFn: () => getMovie(movieId),
  });
  console.log(movie);
  return (
    <Layout>
      {movie && (
        <InfoWrap>
          <div className="content">
            <h2>{movie.title}</h2>
            <div className="details">
              <div>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </div>
              <div className="subgroup">
                <div>
                  <h3>Release date</h3>
                  <p>{movie.release_date}</p>
                </div>
                <div>
                  <h3>Runtime</h3>
                  <p>{movie.runtime}</p>
                </div>
              </div>
              <Genres genres={movie.genres} />
            </div>
          </div>
          <div className="backdrop">
            <div className="gradient"></div>
            <Image path={movie.backdrop_path} size={500} />
          </div>
          {/* <div className="poster">
            <Image path={movie.poster_path} />
          </div> */}
        </InfoWrap>
      )}
      <SimilarList id={movieId!} />
    </Layout>
  );
};

export default MovieInfo;

const InfoWrap = styled.div`
  margin-bottom: 100px;
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

    h2 {
      margin-bottom: 30px;
    }
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
    overflow: hidden;
    border-radius: 20px;
    .gradient {
      background: linear-gradient(to right, #010101, #010101, transparent);
      width: 100px;
      height: 100%;
      position: absolute;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 20px;
    h3 {
      font-size: 16px;
      color: #ccc;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }

  .subgroup {
    display: flex;
    gap: 30px;
  }
`;
