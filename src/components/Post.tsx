import { styled } from 'styled-components';
import { IPost } from '../types';
import { truncate } from '../utils/truncate';
import {
  IoBookmark,
  IoBookmarkOutline,
  IoChatboxOutline,
  IoHeart,
  IoHeartOutline,
} from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { useModalContext } from '../context/ModalContext';

interface PostProps {
  post: IPost;
}

const Post = ({ post }: PostProps) => {
  const navigate = useNavigate();
  const { openModal } = useModalContext();
  const onPostClick = () => {
    navigate(`/post/${post.slug}`);
  };
  return (
    <>
      <Wrap onClick={onPostClick}>
        <div className="post-left">
          {post.isCommunityPost ? (
            <>
              <div className="community-img img-info"></div>
              <div className="author-img"></div>
            </>
          ) : (
            <div className="img-info"></div>
          )}
        </div>
        <div className="post-main">
          <div className="post-info">
            <div className="author">
              <span>Posted by</span>{' '}
              <Link to={`/u/${post.author.username}`}>
                @{post.author.username}
              </Link>
            </div>
            {post.isCommunityPost && (
              <div className="community">
                <span>for</span>{' '}
                <Link to={`/c/${post.community.name}`}>
                  @{post.community.name}
                </Link>
              </div>
            )}
          </div>
          <div className="content">
            <h4>{post.title}</h4>
            <p>{truncate(post.content)}</p>
          </div>
          <div className="post-stat">
            <div className="stat" onClick={openModal}>
              <span className="icon">
                <IoChatboxOutline />
              </span>
              <span>{post.commentCount}</span>
              <span>Comments</span>
            </div>
            <div className="stat">
              <span className="icon">
                {post.isLiked ? <IoHeart /> : <IoHeartOutline />}
              </span>
              <span>{post.likeCount}</span>
              <span>Likes</span>
            </div>
            <div className="stat">
              <span className="icon">
                {post.isSaved ? <IoBookmark /> : <IoBookmarkOutline />}
              </span>
              <span>{post.saveCount}</span>
              <span>Bookmarks</span>
            </div>
          </div>
        </div>
      </Wrap>
    </>
  );
};

export default Post;

const Wrap = styled.div`
  padding: 20px;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  cursor: pointer;
  background-color: #333;

  .post-left {
    width: 60px;
    position: relative;

    .img-info {
      width: 100%;
      height: 60px;
      background-color: #444;
      border-radius: 50%;
    }

    .author-img {
      width: 30px;
      height: 30px;
      background-color: #222;
      border-radius: 50%;
      position: absolute;
      right: 0;
      top: 35px;
      border: 3px solid #333;
    }
  }

  .post-main {
    flex: 1;
  }

  .post-info {
    display: flex;
    gap: 20px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .content {
    margin-bottom: 20px;
    h4 {
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
    }
  }

  .post-stat {
    display: flex;
    gap: 20px;
    .stat {
      display: flex;
      align-items: center;
      align-items: center;
      gap: 5px;
      padding: 8px 10px;
      border-radius: 3px;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.3);
      }
      span {
        display: flex;
        font-size: 14px;
        line-height: 1;
      }

      .icon {
        font-size: 20px;
        margin-right: 5px;
      }
    }
  }
`;
