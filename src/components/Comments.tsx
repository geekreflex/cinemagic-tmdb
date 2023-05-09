import { useQuery } from '@tanstack/react-query';
import { getPostComments } from '../api/post';
import { styled } from 'styled-components';
import { IComment } from '../types';

interface IPostComments {
  postId: string;
}

const Comments = ({ postId }: IPostComments) => {
  const { data, isLoading } = useQuery<void, unknown, IComment[]>({
    queryKey: ['post', postId, 'comments'],
    queryFn: () => getPostComments(postId),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <Wrap>
      {data &&
        data.map((comment) => (
          <div key={comment._id} className="comment">
            <small>By: {comment.author.username}</small>
            <p>{comment.content}</p>
          </div>
        ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .comment {
    border: 1px solid #999;
    padding: 10px;
    border-radius: 4px;
  }
`;
export default Comments;
