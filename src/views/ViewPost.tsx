import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { useQuery } from '@tanstack/react-query';
import { IPost } from '../types';
import { getPost } from '../api/post';
import Post from '../components/Post';

const ViewPost = () => {
  const { slug } = useParams();
  const { data, isLoading, isError } = useQuery<void, unknown, IPost>({
    queryKey: ['post', slug],
    queryFn: () => getPost(slug),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error occured</p>;

  return (
    <Layout>
      <div>
        <Post post={data} />
      </div>
    </Layout>
  );
};

export default ViewPost;
