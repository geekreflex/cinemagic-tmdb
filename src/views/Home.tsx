import { styled } from 'styled-components';
import Layout from '../components/Layout';
import MovieTuff from '../components/MovieTuff';

const Home = () => {
  return (
    <Layout>
      <Main>
        <MovieTuff title="Popular" name="popular" />
        <MovieTuff title="Top Rated" name="top_rated" />
        <MovieTuff title="Upcoming" name="upcoming" />
        <MovieTuff title="Now Playing in Theaters" name="now_playing" />
      </Main>
    </Layout>
  );
};

export default Home;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
