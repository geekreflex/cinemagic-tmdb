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
    enabled: postId != null,
    queryFn: () => getPostComments(postId),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <Wrap>
      {!data?.length && <p>No comments</p>}
      {data &&
        data.map((comment) => (
          <div key={comment._id} className="comment">
            <div className="spaced">
              <div>
                <small>By: {comment.author.username}</small>
                <small>Comment ID: {comment._id}</small>
              </div>
              {comment.isOwner && <small>Owner</small>}
            </div>
            <p>{comment.content}</p>
            <div className="stats">
              <span className={comment.isLiked ? 'liked' : ''}>
                Likes: {comment.likeCount}
              </span>
              <span className={comment.isSaved ? 'saved' : ''}>
                Save: {comment.saveCount}
              </span>
            </div>
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

  .stats {
    display: flex;
  }
`;
export default Comments;
