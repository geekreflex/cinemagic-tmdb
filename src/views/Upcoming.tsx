import Layout from '../components/Layout';
import MovieList from '../components/MovieList';

const Upcoming = () => {
  return (
    <Layout>
      <h3>Upcoming Movings</h3>
      <MovieList name="upcoming" />
    </Layout>
  );
};

export default Upcoming;
