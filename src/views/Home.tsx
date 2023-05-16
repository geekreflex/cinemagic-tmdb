import { styled } from 'styled-components';
import MovieTuff from '../components/MovieTuff';

const Home = () => {
  return (
    <Main>
      <MovieTuff title="Popular" name="popular" />
      <MovieTuff title="Top Rated" name="top_rated" />
      <MovieTuff title="Upcoming" name="upcoming" />
      <MovieTuff title="Now Playing" name="now_playing" />
    </Main>
  );
};

export default Home;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
