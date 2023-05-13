import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { getPost } from '../api/post';
import { IPost } from '../types';
import Comments from './Comments';

const Post = () => {
  const { slug } = useParams();
  const { data, isLoading, isError, error } = useQuery<void, unknown, IPost>({
    queryKey: ['post', slug],
    queryFn: () => getPost(slug),
    // refetchInterval: 1000,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{JSON.stringify(error)}</p>;

  return (
    <div>
      <Link to="/">Home</Link>
      <div className="post">
        <div className="spaced">
          <span>By: {data.author.username}</span>
          <div className="owner-edit">
            {data.isOwner && <small>Owner</small>}
            {data.isEdited && <small>Edited</small>}
          </div>
        </div>

        <small>Post ID: {data._id}</small>
        <br />
        <small>Post Slug: {data.slug}</small>
        {data.title && <h3>{data.title}</h3>}
        <p>{data.content}</p>
        <div className="stats">
          <span>Comments: {data.commentCount}</span>
          <span className={data.isLiked ? 'liked' : ''}>
            Likes: {data.likeCount}
          </span>
          <span className={data.isSaved ? 'saved' : ''}>
            Save: {data.saveCount}
          </span>
        </div>
      </div>
      <h2>Commnets:</h2>
      <Comments postId={data._id} />
    </div>
  );
};

export default Post;
