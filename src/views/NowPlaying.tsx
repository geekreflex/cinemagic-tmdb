import Layout from '../components/Layout';
import MovieList from '../components/MovieList';

const NowPlaying = () => {
  return (
    <Layout>
      <h3>Now Playing Movies</h3>
      <MovieList name="now_playing" />
    </Layout>
  );
};

export default NowPlaying;
