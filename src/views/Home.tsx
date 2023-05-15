import { styled } from 'styled-components';
import Layout from '../components/Layout';
import MovieTuff from '../components/MovieTuff';

const Home = () => {
  return (
    <Layout>
      <h3>Home</h3>
      <Main>
        <MovieTuff title="Popular Movies" name="popular" />
        <MovieTuff title="Upcoming Movies" name="upcoming" />
        <MovieTuff title="In Theaters" name="now_playing" />
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
