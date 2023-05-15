import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { useQuery } from '@tanstack/react-query';
import { getMovie } from '../api/movies';
import Image from '../components/Image';
import { IMovie } from '../types/movie';
import { styled } from 'styled-components';
import SimilarMovies from '../components/SimilarMovies';

const MovieInfo = () => {
  const { movieId } = useParams();
  const { data: movie } = useQuery<void, unknown, IMovie>({
    queryKey: ['movie', movieId],
    queryFn: () => getMovie(movieId),
  });
  return (
    <Layout>
      <InfoWrap>
        {movie && (
          <div>
            <h2>{movie.title}</h2>
            <Backdrop>
              <Image path={movie.backdrop_path} size={500} />
              <Image path={movie.poster_path} />
            </Backdrop>
            <p>{movie.overview}</p>
            <p>{movie.release_date}</p>
            <p>{movie.tagline}</p>
            <p>{movie.video ? 'YES' : 'NO'}</p>
          </div>
        )}
      </InfoWrap>
      <SimilarMovies id={movieId!} />
    </Layout>
  );
};

export default MovieInfo;

const InfoWrap = styled.div`
  margin-bottom: 100px;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 500px;
`;
