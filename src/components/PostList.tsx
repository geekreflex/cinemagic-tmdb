import { useQuery } from '@tanstack/react-query';
import { IPost } from '../types/post';
import { getLatestPosts } from '../api/post';
import { Link } from 'react-router-dom';

const PostList = () => {
  const { data, isLoading, isError, error } = useQuery<void, unknown, IPost[]>({
    queryKey: ['lastest-posts'],
    queryFn: () => getLatestPosts(),
  });

  if (isLoading) <p>Loading...</p>;
  if (isError) <p>{JSON.stringify(error)}</p>;

  return (
    <div className="posts">
      {data &&
        data.map((post, index) => (
          <div key={index} className="post">
            <div>
              <span>By: {post.author.username}</span>
              {post.isEdited && <span className="edited">Edited</span>}
            </div>
            <small>Post ID: {post._id}</small>
            <br />

            <small>Post Slug: {post.slug}</small>
            <Link to={`/posts/${post.slug}`}>
              {post.title && <h3>{post.title}</h3>}
            </Link>
            <p>{post.content}</p>
            <div className="stats">
              <span>Comments: {post.commentCount}</span>
              <span className={post.isLiked ? 'liked' : ''}>
                Likes: {post.likeCount}
              </span>
              <span className={post.isSaved ? 'saved' : ''}>
                Save: {post.saveCount}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
