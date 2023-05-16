import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import MovieList from '../components/MovieList';
import { Title } from '../styles/gobalStyles';
import { underscore } from '../utils/hyphen';

const Dynamic = () => {
  const { movie } = useParams();

  const titles: any = {
    upcoming: 'Upcoming',
    popular: 'Popular',
    'now-playing': 'Now Playing',
  };

  if (!movie) return <div>No Movie</div>;

  return (
    <Layout>
      <Title>{titles[movie]}</Title>
      <MovieList name={underscore(movie)} />
    </Layout>
  );
};

export default Dynamic;
