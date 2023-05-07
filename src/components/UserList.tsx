import { IUser } from '../types';

interface IUserProps {
  users: IUser[];
}

const UserList = ({ users }: IUserProps) => {
  return (
    <div className="users">
      {users.map((user) => (
        <div className="user" key={user._id}>
          <small>User ID: {user._id}</small>
          <br />
          {user.isFollower && <small>Follows you</small>}
          <h4 key={user._id}>{user.fullName}</h4>
          <small>@{user.username}</small>
          <div className="follow-count">
            <small>Followers: {user.followerCount}</small>
            <small>Following: {user.followingCount}</small>
          </div>
          {user.isFollowing && <button>Following</button>}
          {user.isFollower && !user.isFollowing && <button>Follow back</button>}
          {!user.isFollower && !user.isFollowing && <button>Follow</button>}
        </div>
      ))}
    </div>
  );
};

export default UserList;
