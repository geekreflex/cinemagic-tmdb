import { useQuery } from '@tanstack/react-query';
import { IPost, IPostPaginated } from '../types/post';
import { getLatestPosts } from '../api/post';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PostList = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isError, error } = useQuery<
    void,
    unknown,
    IPostPaginated
  >({
    queryKey: ['lastest-posts', page],
    queryFn: () => getLatestPosts(page),
    keepPreviousData: true,
  });

  if (isLoading) <p>Loading...</p>;
  if (isError) <p>{JSON.stringify(error)}</p>;

  return (
    <div className="posts">
      {data &&
        data.data.map((post, index) => (
          <div key={index} className="post">
            <div className="spaced">
              <span>By: {post.author.username}</span>
              <div className="owner-edit">
                {post.isOwner && <small>Owner</small>}
                {post.isEdited && <small>Edited</small>}
              </div>
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
      <div className="pagination">
        {data?.meta?.prevPage && (
          <button onClick={() => setPage(data.meta.prevPage || 1)}>
            Previous
          </button>
        )}
        {data?.meta?.nextPage && (
          <button onClick={() => setPage(data.meta.nextPage || 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default PostList;
