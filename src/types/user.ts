export interface IUser {
  _id: string;
  username: string;
  fullName: string;
  bio: string;
  profilePhotoUrl: string;
  followerCount: number;
  followingCount: number;
  isFollowing: boolean;
  isFollower: boolean;
  isUser: boolean;
}
