import { useQuery } from '@tanstack/react-query';
import { getUser } from '../api/user';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { IUser } from '../types';

const Profile = () => {
  const { username } = useParams();
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery<void, unknown, IUser>({
    queryKey: ['user', username],
    queryFn: () => getUser(username!!),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Wrap>
      {user.coverPhotoUrl && (
        <div className="cover-photo">
          <img src={user.coverPhotoUrl} />
        </div>
      )}
      <div className="main">
        <div className="profile-photo">
          <img src={user.profilePhotoUrl} />
        </div>
        <div className="user-info">
          <h3>{user.fullName}</h3>
          <h4>@{user.username}</h4>
          <div className="follow-info">
            <h4>Following: {user.followingCount}</h4>
            <h4>Followers: {user.followerCount}</h4>
          </div>
        </div>
        {user.isUser ? (
          <div>
            <button>Edit Profile</button>
          </div>
        ) : (
          <div>
            {user.isFollowing && <button>Following</button>}
            {user.isFollower && !user.isFollowing && (
              <button>Follow back</button>
            )}
            {!user.isFollower && !user.isFollowing && <button>Follow</button>}
          </div>
        )}
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px;
  }
  .cover-photo {
    flex: 1;
    height: 200px;
    overflow: hidden;
    margin-bottom: 30px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .profile-photo {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .follow-info {
    display: flex;
    gap: 20px;
    padding: 20px;
    font-size: 14px;
  }
`;

export default Profile;
