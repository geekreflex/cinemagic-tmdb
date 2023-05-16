import { styled } from 'styled-components';
import MovieTuff from '../components/MovieTuff';
import Categories from '../components/Categories';
// import LatestMovie from '../components/LatestMovie';

const Home = () => {
  return (
    <Main>
      <Categories />
      {/* <LatestMovie /> */}
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
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
