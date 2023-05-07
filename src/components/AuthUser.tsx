import { IUser } from '../types';

interface IAuthUserProps {
  user: IUser;
}
const AuthUser = ({ user }: IAuthUserProps) => {
  return (
    <div className="auth-user">
      <div className="user">
        <small>User ID: {user._id}</small>
        <br />
        {user.isFollower && <small>Follows you</small>}
        <h4 key={user._id}>{user.fullName}</h4>
        <small>@{user.username}</small>
        <div className="follow-count">
          <small>Followers: {user.followerCount}</small>
          <small>Following: {user.followingCount}</small>
        </div>
      </div>
    </div>
  );
};

export default AuthUser;
