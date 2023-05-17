import { styled } from 'styled-components';
import { IMovie } from '../types/movie';
import MovieVideos from './MovieVidoes';

interface DetailsProps {
  movie: IMovie;
}

const Details = ({ movie }: DetailsProps) => {
  return (
    <Wrap>
      <Main>
        <h3>{movie.title}</h3>
      </Main>
      <MovieVideos videos={movie.videos} />
    </Wrap>
  );
};

export default Details;

const Wrap = styled.div`
  margin-bottom: 100px;
`;

const Main = styled.div`
  height: 450px;
  background-color: #010101;
  margin-bottom: 50px;
  padding: 30px;
  border-radius: 21px;
`;
