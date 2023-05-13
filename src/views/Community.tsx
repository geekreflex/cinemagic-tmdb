import { useParams } from 'react-router-dom';

const Community = () => {
  const { community } = useParams();
  return <div>Community {community}</div>;
};

export default Community;
