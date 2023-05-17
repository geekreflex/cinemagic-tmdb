import { styled } from 'styled-components';
import MovieList from '../components/MovieList';

const Home = () => {
  return (
    <Main>
      <MovieList title="Popular" name="popular" />
      <MovieList title="Top Rated" name="top_rated" />
      <MovieList title="Coming Soon" name="upcoming" />
      <MovieList title="Now Playing" name="now_playing" />
    </Main>
  );
};

export default Home;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
