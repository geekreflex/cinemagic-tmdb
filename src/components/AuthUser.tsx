import { useQuery } from '@tanstack/react-query';
import { IUser } from '../types';
import { geAuthtUser } from '../api/user';

const AuthUser = () => {
  const { data, isLoading, isError, error } = useQuery<void, unknown, IUser>({
    queryKey: ['auth-user'],
    queryFn: () => geAuthtUser(),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{JSON.stringify(error)}</p>;

  return (
    <div className="auth-user">
      <div className="user">
        <small>User ID: {data._id}</small>
        <br />
        {data.isFollower && <small>Follows you</small>}
        <h4 key={data._id}>{data.fullName}</h4>
        <small>@{data.username}</small>
        <div className="follow-count">
          <small>Followers: {data.followerCount}</small>
          <small>Following: {data.followingCount}</small>
        </div>
      </div>
    </div>
  );
};

export default AuthUser;
