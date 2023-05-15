import Layout from '../components/Layout';
import MovieList from '../components/MovieList';

const Popular = () => {
  return (
    <Layout>
      <h3>Popular Movies</h3>
      <MovieList name="popular" />
    </Layout>
  );
};

export default Popular;
