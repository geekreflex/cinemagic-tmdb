import { IPost } from '../types/post';

interface IPostList {
  posts: IPost[];
}

const PostList = ({ posts }: IPostList) => {
  return (
    <div className="posts">
      {posts &&
        posts.map((post, index) => (
          <div key={index} className="post">
            <div>
              <span>By: {post.author.username}</span>
              {post.isEdited && <span className="edited">Edited</span>}
            </div>
            <small>Post ID: {post._id}</small>
            <br />

            <small>Post Slug: {post.slug}</small>
            {post.title && <h3>{post.title}</h3>}
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
