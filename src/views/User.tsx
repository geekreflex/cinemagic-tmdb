import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const User = () => {
  const { name } = useParams();
  return (
    <Layout>
      <div>User {name}</div>
    </Layout>
  );
};

export default User;
