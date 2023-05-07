export interface IPost {
  _id: string;
  slug: string;
  title: string;
  content: string;
  commentCount: number;
  likeCount: number;
  saveCount: number;
  author: IUser;
  createdAt: Date;
  isEdited: boolean;
  isSaved: boolean;
  isLiked: boolean;
}

export interface IUser {
  username: string;
  profilePhotoUrl: string;
}
