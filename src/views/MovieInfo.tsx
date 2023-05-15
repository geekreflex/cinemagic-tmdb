import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const MovieInfo = () => {
  const { movieId } = useParams();
  return (
    <Layout>
      <div>
        <p>{movieId}</p>
      </div>
    </Layout>
  );
};

export default MovieInfo;
