import { useQuery } from '@tanstack/react-query';
import { IPostPaginated } from '../types';
import { getTrendingPosts } from '../api/post';
import { useState } from 'react';
import Post from './Post';
import { styled } from 'styled-components';

const TrendingPosts = () => {
  const [page, _] = useState<number>(1);
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery<void, unknown, IPostPaginated>({
    queryKey: ['trending-posts'],
    queryFn: () => getTrendingPosts(page),
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error occured</p>;

  return (
    <Wrap>
      {posts.data.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </Wrap>
  );
};

export default TrendingPosts;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 100px;
`;
