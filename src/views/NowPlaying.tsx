import MovieList from '../components/MovieList';

const NowPlaying = () => {
  return (
    <div>
      <h3>Now Playing Movies</h3>
      <MovieList name="now_playing" />
    </div>
  );
};

export default NowPlaying;
